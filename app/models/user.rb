class User < ApplicationRecord
  
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password
  
  after_initialize :ensure_session_token
  after_create :seed_defaults

  has_many :notebooks,
    foreign_key: :author_id,
    class_name: :Notebook

  has_many :notes,
    through: :notebooks,
    source: :notes

  has_many :tags,
    foreign_key: :author_id, 
    class_name: :Tag

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  private

  def seed_defaults 
    default_notebook = self.notebooks.create!({ name: "New Notebook" })
    default_note = default_notebook.notes.create!({ title: "New Note", body: "" })
  end

end

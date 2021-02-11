class Notebook < ApplicationRecord
  validates :name, :author_id, presence: true
  validates :name, uniqueness: { scope: :author_id }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end

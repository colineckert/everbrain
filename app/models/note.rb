class Note < ApplicationRecord
  validates :body, presence: true

  belongs_to :notebook,
    foreign_key: :notebook_id,
    class_name: :Notebook
end

class Note < ApplicationRecord
  # validates :body, null: false

  belongs_to :notebook,
    foreign_key: :notebook_id,
    class_name: :Notebook

  has_many :note_tags,
    foreign_key: :note_id,
    class_name: :NoteTag

  has_many :tags, 
    through: :note_tags,
    source: :tag
end

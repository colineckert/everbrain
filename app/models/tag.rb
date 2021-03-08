class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: { scope: :author_id }

  has_many :note_tags,
    foreign_key: :tag_id,
    class_name: :NoteTag

  has_many :notes,
    through: :note_tags, 
    source: :note
end

class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body, null: false
      t.integer :notebook_id, null: false

      t.timestamps
    end

    add_index :notes, :notebook_id
    add_index :notes, :title
  end
end

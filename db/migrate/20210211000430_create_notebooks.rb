class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :name, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :notebooks, [:name, :author_id], unique: true
  end
end

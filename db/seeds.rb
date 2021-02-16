# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all

demo_user = User.create!(email: "demo@everbrain.com", password: "password", full_name: "Demo User")

demo_notebook_1 = Notebook.create!(name: "First Notebook", author_id: demo_user.id)
demo_notebook_2 = Notebook.create!(name: "Research", author_id: demo_user.id)
demo_notebook_3 = Notebook.create!(name: "Fellowship Members", author_id: demo_user.id)

sample_text_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

demo_note_1 = Note.create!(title: "Test Note 1", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_2 = Note.create!(title: "Test Note 2", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_3 = Note.create!(title: "Test Note 3", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_4 = Note.create!(title: "Test Note 4", body: sample_text_1, notebook_id: demo_notebook_2.id)
demo_note_5 = Note.create!(title: "Test Note 5", body: sample_text_1, notebook_id: demo_notebook_2.id)
demo_note_6 = Note.create!(title: "Test Note 6", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_7 = Note.create!(title: "Test Note 7", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_8 = Note.create!(title: "Test Note 8", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_9 = Note.create!(title: "Test Note 9", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_10 = Note.create!(title: "Test Note 10", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_11 = Note.create!(title: "Test Note 11", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_12 = Note.create!(title: "Test Note 12", body: sample_text_1, notebook_id: demo_notebook_2.id)
demo_note_13 = Note.create!(title: "Test Note 13", body: sample_text_1, notebook_id: demo_notebook_2.id)
demo_note_14 = Note.create!(title: "Test Note 14", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_15 = Note.create!(title: "Test Note 15", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_16 = Note.create!(title: "Test Note 16", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_17 = Note.create!(title: "Test Note 17", body: sample_text_1, notebook_id: demo_notebook_3.id)
demo_note_18 = Note.create!(title: "Test Note 18", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_19 = Note.create!(title: "Test Note 19", body: sample_text_1, notebook_id: demo_notebook_2.id)
demo_note_20 = Note.create!(title: "Test Note 20", body: sample_text_1, notebook_id: demo_notebook_3.id)
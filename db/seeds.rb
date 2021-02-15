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

# demo_note_1 = Note.create!(title: "Test Note", body: sample_text_1, notebook_id: demo_notebook_1.id)
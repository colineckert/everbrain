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

demo_notebook_1 = Notebook.create!(name: "Demo Notebook", author_id: demo_user.id)
demo_notebook_2 = Notebook.create!(name: "Quotes", author_id: demo_user.id)
demo_notebook_3 = Notebook.create!(name: "Travel", author_id: demo_user.id)
demo_notebook_4 = Notebook.create!(name: "The Fellowship", author_id: demo_user.id)

sample_text_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
emojis = "😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰🥰"
gettys = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

Abraham Lincoln
November 19, 1863"

sj = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
mt = "Spread love everywhere you go. Let no one ever come to you without leaving happier."
fdr = "When you reach the end of your rope, tie a knot in it and hang on."
er = "The future belongs to those who believe in the beauty of their dreams."
bf = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
rwe = "Do not go where the path may lead, go instead where there is no path and leave a trail."
g_quote = '"I wish it need not have happened in my time,” said Frodo. “So do I,” said Gandalf, “and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us."'
nm = "The greatest glory in living lies not in never falling, but in rising every time we fall."

frodo = "The main protagonist of The Lord of the Rings, a Hobbit of exceptional character. Frodo is also a friend of the Elves, knowledgeable in their language and a lover of their songs. Like Bilbo—or any other good Hobbit—Frodo loves good food and simple comforts, but he is also thoughtful and curious and has a wisdom and strength of character that set him apart."
sam = "The former gardener at Bag End and Frodo’s indomitable servant throughout his quest. Although Sam is not extraordinarily wise or intelligent, his common sense and powers of observation serve him well. Perhaps most important, he is stubborn, brave, and deeply loyal to Frodo."
gandalf = "One of the five great Wizards in Middle-earth, second in his order only to Saruman. Known to most Hobbits only as a creator of fine fireworks, Gandalf is actually powerful beyond their imagination. He is also wise, humorous, kind, and generous, though sometimes short-tempered."
legolas = "An Elf from Mirkwood. Legolas is light on his feet and masterful with a bow. After overcoming initial differences that stem from the historical antipathy between their races, he and the Dwarf Gimli become fast friends."
gimli = "A Dwarf, the son of Glóin (one of Bilbo’s company in The Hobbit). Gimli bristles when he feels insulted, but he is noble, stalwart, and brave."
aragorn = "The heir of Isildur, one of the few Men from the great race of Númenor left in Middle-earth. Aragorn is also known as Strider. Before the coming of the Ring, he lived as a Ranger in the North, protecting the Shire and other lands from servants of the Enemy. Aragorn is a formidable warrior and tracker."
boromir = "One of the Men of Gondor, from the city of Minas Tirith in the south. Boromir is a valiant fighter and is always trustworthy in battle, but his pride and recklessness make him vulnerable to the Ring’s power."
peregrin = "A young and somewhat rash Hobbit. Pippin is good-natured and a bit of a smart aleck."
merry = "A young Hobbit from Buckland. Merry has a temperament similar to Pippin’s, though he is more mature and, unlike most Hobbits, not afraid of boats and water."

destinations = "Places to visit: Italy, Spain, Hong Kong, Greece, London"

demo_note_1 = Note.create!(title: "Lorem ipsum", body: sample_text_1, notebook_id: demo_notebook_1.id)
demo_note_2 = Note.create!(title: "The Gettysburg Address", body: gettys, notebook_id: demo_notebook_1.id)
demo_note_3 = Note.create!(title: "Emojis", body: emojis, notebook_id: demo_notebook_1.id)

demo_note_4 = Note.create!(title: "Steve Jobs", body: sj, notebook_id: demo_notebook_2.id)
demo_note_5 = Note.create!(title: "Mother Teresa", body: mt, notebook_id: demo_notebook_2.id)
demo_note_6 = Note.create!(title: "Franklin D. Roosevelt", body: fdr, notebook_id: demo_notebook_2.id)
demo_note_7 = Note.create!(title: "Eleanor Roosevelt", body: er, notebook_id: demo_notebook_2.id)
demo_note_8 = Note.create!(title: "Benjamin Franklin", body: bf, notebook_id: demo_notebook_2.id)
demo_note_9 = Note.create!(title: "Ralph Waldo Emerson", body: rwe, notebook_id: demo_notebook_2.id)
demo_note_10 = Note.create!(title: "Gandalf", body: g_quote, notebook_id: demo_notebook_2.id)
demo_note_11 = Note.create!(title: "Nelson Mandela", body: nm, notebook_id: demo_notebook_2.id)

demo_note_12 = Note.create!(title: "Frodo Baggins", body: frodo, notebook_id: demo_notebook_4.id)
demo_note_13 = Note.create!(title: "Samwise (Sam) Gamgee", body: sam, notebook_id: demo_notebook_4.id)
demo_note_14 = Note.create!(title: "Gandalf the Grey", body: gandalf, notebook_id: demo_notebook_4.id)
demo_note_15 = Note.create!(title: "Legolas", body: legolas, notebook_id: demo_notebook_4.id)
demo_note_16 = Note.create!(title: "Gimli", body: gimli, notebook_id: demo_notebook_4.id)
demo_note_17 = Note.create!(title: "Aragorn", body: aragorn, notebook_id: demo_notebook_4.id)
demo_note_18 = Note.create!(title: "Boromir", body: boromir, notebook_id: demo_notebook_4.id)
demo_note_19 = Note.create!(title: "Peregrin (Pippin) Took", body: peregrin, notebook_id: demo_notebook_4.id)
demo_note_20 = Note.create!(title: "Meriadoc (Merry) Brandybuck", body: merry, notebook_id: demo_notebook_4.id)

demo_note_21 = Note.create!(title: "Trip ideas", body: destinations, notebook_id: demo_notebook_3.id)
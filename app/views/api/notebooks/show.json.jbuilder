json.partial! "/api/notebooks/notebook", notebook: @notebook

# json.notebook do
#     json.partial! 'api/notebooks/notebook', notebook: @notebook
# end

json.noteIds do
    json.array! @notes do |note|
        json.partial! 'api/notes/note', note: note
    end
end
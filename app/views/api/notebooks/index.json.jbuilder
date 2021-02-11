# json.array! @notebooks do |notebook|
#   json.partial! "api/notebooks/notebook", notebook: notebook
# end

@notebooks.each do |notebook|
  json.set! notebook.id do 
    json.partial! 'notebook', notebook: notebook
    json.noteIds []
  end
end
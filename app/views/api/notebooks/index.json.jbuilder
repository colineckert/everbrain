@notebooks.each do |notebook|
  json.set! notebook.id do 
    json.partial! 'notebook', notebook: notebook
    json.noteIds []
  end
end
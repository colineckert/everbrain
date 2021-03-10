export const fetchTags = () => {
  return $.ajax({
    url: "/api/tags"
  })
}

export const fetchTag = (tagId) => {
  return $.ajax({
    url: `/api/tags/${tagId}`
  })
}

export const updateTag = (tag) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tags/${tag.id}`,
    data: { tag }
  })
}

export const createTag = (tag) => {
  return $.ajax({
    method: "POST",
    url: "/api/tags",
    data: { tag }
  })
}

export const deleteTag = (tagId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tags/${tagId}`
  })
}

export const createNoteTag = (note_tag) => {
  return $.ajax({
    method: "POST",
    url: `/api/notes/${note_tag.note_id}/note_tags/`,
    data: { note_tag }
  })
}

export const deleteNoteTag = (noteTag) => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/notes/${noteTag.note_id}/note_tags/${noteTag.tag_id}`,
  })
}

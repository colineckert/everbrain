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
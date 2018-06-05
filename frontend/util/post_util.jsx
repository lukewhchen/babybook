export const fetchPosts = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts',
    data: { userId }
  });
};

export const fetchPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `api/posts/${postId}`,
  });
};

export const createPost = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const updatePost = post => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = postId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}`
  });
};

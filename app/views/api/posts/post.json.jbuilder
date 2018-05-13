json.post do
  json.partial! 'api/posts/post', post: @post, current_user: @current_user
end

# didn't have in glitter project

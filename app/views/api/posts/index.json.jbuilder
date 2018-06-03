json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end


json.authors do
  @posts.map(&:author).each do |author|
    json.set! author.id do
      json.partial! 'api/users/user', user: author
    end
  end
end
# for rendering all posts
# tp6

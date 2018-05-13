json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end


json.authors do
  # the N+1 query would happen here because we're using the author association on each gleet
  # @gleets.map {|gleet| gleet.author}
  @posts.map(&:author).each do |author|
    json.set! author.id do
      json.partial! 'api/users/user', user: author
    end
  end
end

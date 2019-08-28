json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

# 'api/posts/post' 代表去找 path -> views/api/posts 裡面的 _post.json.jbuilder 檔案

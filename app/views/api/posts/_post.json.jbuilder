json.extract! post, :id, :body, :author_id, :created_at
json.author_name [post.author.first_name.capitalize,post.author.last_name.capitalize].join(" ")
json.image_url asset_path(post.image.url)
# this post.image.url is for AWS
# different with the first post_image_url <-- this is I created at posts table and didn't use

# 使用 jbuilder 將個別 comment 的 author_name 包進 json.comment 中
json.comment post.comments
json.comment post.comments.each do |comment|
    json.partial! 'api/comments/comment', comment: comment
end

# json testing
# 有抓到 author first name
# json.title post.comments.each do |comment|
#   json.people comment.author.first_name
# end

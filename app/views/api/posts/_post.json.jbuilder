json.author_name [post.author.first_name.capitalize,post.author.last_name.capitalize].join(" ")

json.extract! post, :id, :body, :author_id, :created_at
json.image_url asset_path(post.image.url)
# this post.image.url is for AWS
# different with the first post_image_url <-- this is I created at posts table and didn't use

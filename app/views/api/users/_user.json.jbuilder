json.extract! user, :id, :first_name, :last_name, :email, :hometown, :workplace, :school, :gender
json.fullName [user.first_name.capitalize,user.last_name.capitalize].join(" ")

json.profile_photo_url asset_path(user.profile_photo.url)
json.cover_photo_url asset_path(user.cover_photo.url)



# json.posts user.posts
# hash = { author: { name: "David" } }

# json.posts do
#   user.posts.each do |post|
#     hash = {image_url: asset_path(post.image.url)}
#     json.set! post.id do
#       json.id = post.id
#       json.body = post.body
#       json.merge! hash
#     end
#   end
# end

# {image_url => asset_path(post.image.url)}
# json.extract! post, :id, :body, :author_id

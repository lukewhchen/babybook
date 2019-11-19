json.extract! user, :id, :first_name, :last_name, :email, :hometown, :workplace, :school, :gender
json.fullName [user.first_name.capitalize,user.last_name.capitalize].join(" ")

json.profile_photo_url asset_path(user.profile_photo.url)
json.cover_photo_url asset_path(user.cover_photo.url)

# rails/jbuilder

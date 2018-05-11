json.extract! user, :id, :first_name, :last_name
json.fullName [user.first_name.capitalize,user.last_name.capitalize].join(" ")

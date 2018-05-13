json.partial! 'api/users/user', user: @user

json.feedIds @feed || []

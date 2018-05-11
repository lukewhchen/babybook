@users.each do |user|
  json.set! user.id do
    json.partial! 'api/uers/user', user: user
  end
end

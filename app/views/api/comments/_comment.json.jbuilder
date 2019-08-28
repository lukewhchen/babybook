json.extract! comment, :id, :body, :post_id, :updated_at
# comment_author = comment.author
# json.author_id comment_author.id
# json.author_fname comment_author.first_name
# json.author_lname comment_author.last_name

json.author_name [comment.author.first_name.capitalize,comment.author.last_name.capitalize].join(" ")


# 從 post partial 裡面 call comment.partial 到這裏

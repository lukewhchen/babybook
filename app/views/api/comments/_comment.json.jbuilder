json.extract! comment, :id, :body, :post_id, :updated_at
comment_author = comment.author
json.author_id comment_author.id
json.author_fname comment_author.first_name
json.author_lname comment_author.last_name

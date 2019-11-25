class Comment < ApplicationRecord
  validates :body, :author_id, :post_id, presence: true
  validates :body, length: { maximum: 300 }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

end
# create new migration!
# commentable polymorphism

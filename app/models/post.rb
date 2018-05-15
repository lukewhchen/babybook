class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  has_attached_file :image, default_url: "emma.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end

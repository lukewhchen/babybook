class Post < ApplicationRecord
  validates :body, :author_id, presence: true
  validates :body, length: { maximum: 63206 }
  has_attached_file :image, default_url: "youcan.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy

  # PhotoLibrary = ["youcan.jpg", "hithere.jpeg", "cutebaby.jpg", "bestfriend.jpg", "george.jpg", "kobebaby.jpg", "bear.jpg", "happyhalloween.jpg"]
  #
  #
  # def without_attached_file?
  #   @post.image_file_name.nil?
  # end
  #
  # def add_random_picture
  #   ran_idx = rand(PhotoLibrary.length)
  #   @post.image = File.open(File.join(Rails.root, 'app', 'assets', 'images', PhotoLibrary[ran_idx]))
  # end

end

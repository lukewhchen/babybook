# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  hometown        :string
#  workplace       :string
#  school          :string
#  gender          :string
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

# Use email as unique credentials for different users
class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  has_attached_file :profile_photo, default_url: "profile-1.jpg"
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/
  has_attached_file :cover_photo, default_url: "cover-1.jpg"
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/
  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end

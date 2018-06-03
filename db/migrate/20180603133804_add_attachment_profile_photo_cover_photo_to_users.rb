class AddAttachmentProfilePhotoCoverPhotoToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :profile_photo
      t.attachment :cover_photo
    end
  end

  def self.down
    remove_attachment :users, :profile_photo
    remove_attachment :users, :cover_photo
  end
end

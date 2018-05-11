class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.string :post_image_url

      t.timestamps
    end
    add_index :posts, :author_id
  end
end

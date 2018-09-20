# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
environment_seed_file = File.join(Rails.root, 'db', 'seeds', "#{Rails.env}.rb")

User.destroy_all
luke = User.create!(email: 'luke@gmail.com', first_name: 'Luke', last_name: 'Chen', password:'123456',
  hometown:'Taiwan', workplace:'babybook', school:'app Academy', gender:'male')
meiyao = User.create!(email: 'meiyao@gmail.com', first_name: 'MeiYao', last_name: 'Lin', password:'234567',
  hometown:'Taiwan', workplace:'NIH', school:'NTU', gender:'female')
emma = User.create!(email: 'emma@gmail.com', first_name: 'Emma', last_name: 'Chen', password:'345678',
  hometown:'Maryland', workplace:'playground', school:'puppy', gender:'female')
jordan = User.create!(email: 'jordan@gmail.com', first_name: 'Michale', last_name: 'Jordan', password:'456789',
  hometown:'Chicago', workplace:'Chicago Bulls', school:'University of North Carolina', gender:'male')
kobe = User.create!(email: 'kobe@gmail.com', first_name: 'Kobe', last_name: 'Bryant', password:'987654',
  hometown:'Philadelphia', workplace:'Los Angeles Lakers', school:'Lower Merion', gender:'male')
jon = User.create!(email: 'jon@gmail.com', first_name: 'Jon', last_name: 'Snow', password:'876543',
  hometown:'Winterfell', workplace:'the North', school:'Old Gods of the Forest', gender:'male')
taylor = User.create!(email: 'taylor@gmail.com', first_name: 'Taylor', last_name: 'Swift', password:'765432',
  hometown:'Reading', workplace:'Hollywood', school:'homeschool', gender:'female')
mark = User.create!(email: 'mark@gmail.com', first_name: 'Mark', last_name: 'Zuckerberg', password:'654321',
  hometown:'White Plains', workplace:'facebook', school:'Harvard', gender:'male')



Seedphoto = [
  "https://s3.amazonaws.com/seedphoto/best-friend.jpg",
  "https://s3.amazonaws.com/seedphoto/cutebaby.jpg",
  "https://s3.amazonaws.com/seedphoto/favorite.jpeg"
  ]

  imgs = []
# DefaultPhoto.each do |el|
  # imgs << File.open(File.join(Rails.root, 'assets', 'images', el))
  # imgs << File.open(File.join(Rails.root, "app/assets/images/#{el}"))
  # imgs << File.open(File.join(Rails.root, image_url(el)))
  # imgs << File.open(asset_url(el))
  # app/assets/images/big-girl.jpg

# end
# img = File.open(File.join(Rails.root, 'app', 'assets', 'images', 'cutebaby.jpg'))
# Post.first.update(image: img)

PostBody = [
  "My little princess.",
  "I Love YOU so much Baby!! Every day I wake up and fall in love with YOU all over again!!",
  "Dad eats my ice cream ~~~",
  "I'm a born leader.",
  "Here she is ... the newest member of the Mamba family!",
  "My favorite show in Winterfell.",
  "Here is the answer you are looking for!",
  "Let's make the world a better place."
]


# Post.destroy_all
# Post.create!(body: PostBody[0] ,author_id:luke.id, image_url:'https://s3.us-east-1.amazonaws.com/aa-babybook-pro/posts/images/000/000/206/original/best-friend.jpg?1536255734')
# Post.create!(body: PostBody[1] ,author_id:meiyao.id, image_url:'https://s3.amazonaws.com/seedphoto/cutebaby.jpg' )
# Post.create!(body: PostBody[2] ,author_id:emma.id, image_url:'https://s3.amazonaws.com/seedphoto/cutebaby.jpg' )
# Post.create!(body: PostBody[3] ,author_id:jordan.id, image_url:'https://s3.amazonaws.com/seedphoto/cutebaby.jpg' )
# Post.create!(body: PostBody[4] ,author_id:kobe.id, image_url:'https://s3.amazonaws.com/seedphoto/best-friend.jpg' )
# Post.create!(body: PostBody[5] ,author_id:jon.id, image_url:'https://s3.amazonaws.com/seedphoto/cutebaby.jpg' )
# Post.create!(body: PostBody[6] ,author_id:taylor.id, image_url:'https://s3.amazonaws.com/seedphoto/cutebaby.jpg' )
# Post.create!(body: PostBody[7] ,author_id:mark.id, image_url:'https://s3.amazonaws.com/seedphoto/cutebaby.jpg')

Post.destroy_all
Post.create!(body: PostBody[0] ,author_id:luke.id, image: imgs[0])
Post.create!(body: PostBody[1] ,author_id:meiyao.id, image: imgs[1] )
Post.create!(body: PostBody[2] ,author_id:emma.id, image: imgs[2] )
Post.create!(body: PostBody[3] ,author_id:jordan.id, image: imgs[3] )
Post.create!(body: PostBody[4] ,author_id:kobe.id, image: imgs[4] )
Post.create!(body: PostBody[5] ,author_id:jon.id, image: imgs[5] )
Post.create!(body: PostBody[6] ,author_id:taylor.id, image: imgs[6] )
Post.create!(body: PostBody[7] ,author_id:mark.id, image: imgs[7] )

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
  hometown:'Taiwan', workplace:'babybook', school:'app Academy', gender:'male',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'hithere.jpeg')))
meiyao = User.create!(email: 'meiyao@gmail.com', first_name: 'MeiYao', last_name: 'Lin', password:'234567',
  hometown:'Taiwan', workplace:'NIH', school:'NTU', gender:'female',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'happyhalloween.jpg')))
emma = User.create!(email: 'emma@gmail.com', first_name: 'Emma', last_name: 'Chen', password:'345678',
  hometown:'Maryland', workplace:'playground', school:'puppy', gender:'female',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'favorite.jpeg')))
jordan = User.create!(email: 'jordan@gmail.com', first_name: 'Michale', last_name: 'Jordan', password:'456789',
  hometown:'Chicago', workplace:'Chicago Bulls', school:'University of North Carolina', gender:'male',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'hithere.jpeg')))
kobe = User.create!(email: 'kobe@gmail.com', first_name: 'Kobe', last_name: 'Bryant', password:'987654',
  hometown:'Philadelphia', workplace:'Los Angeles Lakers', school:'Lower Merion', gender:'male',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'coverflower.jpg')))
jon = User.create!(email: 'jon@gmail.com', first_name: 'Jon', last_name: 'Snow', password:'876543',
  hometown:'Winterfell', workplace:'the North', school:'Old Gods of the Forest', gender:'male',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'coverthron.jpg')))
taylor = User.create!(email: 'taylor@gmail.com', first_name: 'Taylor', last_name: 'Swift', password:'765432',
  hometown:'Reading', workplace:'Hollywood', school:'homeschool', gender:'female',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'coverplayground.jpg')))
mark = User.create!(email: 'mark@gmail.com', first_name: 'Mark', last_name: 'Zuckerberg', password:'654321',
  hometown:'White Plains', workplace:'facebook', school:'Harvard', gender:'male',
  cover_photo: File.open(Rails.root.join('app', 'assets', 'images', 'coverhighway.jpg')))


# Seedphoto = [
#   "https://s3.amazonaws.com/seedphoto/best-friend.jpg",
#   "https://s3.amazonaws.com/seedphoto/cutebaby.jpg",
#   "https://s3.amazonaws.com/seedphoto/favorite.jpeg"
#   ]



PostBody = [
  "My little princess.",
  "I Love YOU so much Baby!! Every day I wake up and fall in love with YOU all over again!!",
  "Dad eats my ice cream ~~~",
  "I'm a born leader.",
  "Here she is ... the newest member of the Mamba family!",
  "My favorite show in Winterfell.",
  "Here is the answer you are looking for!",
  "Let's make the world a better place.",
  "Best friend forever!",
  "Let it go~~"
]


Post.destroy_all
Post.create!(body: PostBody[0] ,author_id:luke.id, image: File.open(File.join(Rails.root, 'app', 'assets', 'images', 'cutebaby.jpg')))
Post.create!(body: PostBody[1] ,author_id:meiyao.id, image: File.open(Rails.root.join('app', 'assets', 'images', 'bestfriend.jpg')))
Post.create!(body: PostBody[2] ,author_id:emma.id,  image: File.open(Rails.root.join('app', 'assets', 'images', 'george.jpg')))
Post.create!(body: PostBody[3] ,author_id:jordan.id, image: File.open(Rails.root.join('app', 'assets', 'images', 'bear.jpg')))
Post.create!(body: PostBody[4] ,author_id:kobe.id, image: File.open(Rails.root.join('app', 'assets', 'images', 'kobebaby.jpg')))
Post.create!(body: PostBody[5] ,author_id:jon.id, image: File.open(Rails.root.join('app', 'assets', 'images', 'youknownot.jpg')))
Post.create!(body: PostBody[6] ,author_id:taylor.id, image: File.open(Rails.root.join('app', 'assets', 'images', 'youcan.jpg')))
Post.create!(body: PostBody[7] ,author_id:mark.id, image: File.open(Rails.root.join('app', 'assets', 'images', 'mark.jpg')))

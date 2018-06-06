# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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


Post.destroy_all
Post.create!(body: "When Do Babies Talk?" ,author_id:luke.id )
Post.create!(body: "9 Ways to Help Your Child's Language Development" ,author_id:meiyao.id )
Post.create!(body: "Do Tech Toys Hurt Baby's Language Development?" ,author_id:emma.id )
Post.create!(body: "Hear This Baby Say Hello -- at 7 Weeks Old!" ,author_id:jordan.id )
Post.create!(body: "26 Baby Shower Games" ,author_id:kobe.id )
Post.create!(body: "You Know Nothing!" ,author_id:jon.id )
Post.create!(body: "Taylor Swift CONFIRMS Mystery Baby Voice in Gorgeous" ,author_id:taylor.id )
Post.create!(body: "Mark welcome second baby girl" ,author_id:mark.id )

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(email: 'luke@gmail.com', first_name: 'Luke', last_name: 'Chen', password:'123456')
User.create!(email: 'meiyao@gmail.com', first_name: 'MeiYao', last_name: 'Lin', password:'234567')
User.create!(email: 'emma@gmail.com', first_name: 'Emma', last_name: 'Chen', password:'345678')
User.create!(email: 'jordan@gmail.com', first_name: 'Michale', last_name: 'Jordan', password:'456789')
User.create!(email: 'kobe@gmail.com', first_name: 'Kobe', last_name: 'Bryant', password:'987654')
User.create!(email: 'john@gmail.com', first_name: 'John', last_name: 'Snow', password:'876543')
User.create!(email: 'taylor@gmail.com', first_name: 'Taylor', last_name: 'Swift', password:'765432')
User.create!(email: 'mark@gmail.com', first_name: 'Mark', last_name: 'Zuckerberg', password:'654321')

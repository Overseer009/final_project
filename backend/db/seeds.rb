# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "seeding database with dummy..."

puts "creating User data..."

User.create(name: 'Mark', email: 'markwhite259@gmail.com', password: 'marky1')
User.create(name: 'Sacha', email: 'sacha.sunnasy@gmail.com', password: 'sachy1')
User.create(name: 'Jesse', email: 'jesse.a.lapointe@gmail.com', password: 'jessy1')

puts "creating timelines..."

Timeline.create(user_id: 1, start_month: 1, end_month: 12)
Timeline.create(user_id: 2, start_month: 2, end_month: 11)
Timeline.create(user_id: 3, start_month: 1, end_month: 5)

puts "creating instances..."

Instance.create(name: 'birthday', description: "But, it's my birthday!", instance_date: , instance_image: '*image*')
Instance.create(name: 'birthday', description: "But, it's my birthday!", instance_date: , instance_image: '*image*')
Instance.create(name: 'birthday', description: "But, it's my birthday!", instance_date: , instance_image: '*image*')
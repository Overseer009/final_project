# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# puts "seeding database with dummy..."

puts "creating User data..."

User.create(name: 'Mark', email: 'markwhite259@gmail.com', password: 'marky1')
User.create(name: 'Sacha', email: 'sacha.sunnasy@gmail.com', password: 'sachy1')
User.create(name: 'Jesse', email: 'jesse.a.lapointe@gmail.com', password: 'jessy1')

puts "creating timelines..."

Timeline.create(user_id: 1, start_month: 1, end_month: 12, name: "timeline A")
Timeline.create(user_id: 2, start_month: 2, end_month: 11, name: "timeline B")
Timeline.create(user_id: 3, start_month: 1, end_month: 5, name: "timeline C")



puts "create instance_colours..."

InstanceColour.create(colour: 'Red')
InstanceColour.create(colour: 'Blue')
InstanceColour.create(colour: 'Yellow')
InstanceColour.create(colour: 'Green')
InstanceColour.create(colour: 'Orange')


puts "creating instances..."

Instance.create(timeline_id: 1, instance_colour_id: 2, name: 'birthday', description: "But, it's my birthday!", instance_date: "2021-05-29", instance_image: 'https://images.unsplash.com/photo-1615231417527-f2e8db783da6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')
Instance.create(timeline_id: 2, instance_colour_id: 1, name: 'End of the world party!', description: "Because the world is ending and I feel fine!", instance_date: "2021-08-25" , instance_image: 'https://images.unsplash.com/photo-1562210569-4a9d5fb7e467?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80')
Instance.create(timeline_id: 3, instance_colour_id: 4, name: 'lay in bed', description: "just gonna lay in bed today", instance_date: "2021-12-16", instance_image: 'https://images.unsplash.com/photo-1516153553821-218745a8c4f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80')

# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20210703152428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "instance_colours", force: :cascade do |t|
    t.string "colour"
  end

  create_table "instances", force: :cascade do |t|
    t.integer "timeline_id"
    t.integer "instance_colour_id"
    t.string  "name"
    t.text    "description"
    t.date    "instance_date"
    t.string  "instance_image"
  end

  add_index "instances", ["instance_colour_id"], name: "index_instances_on_instance_colour_id", using: :btree
  add_index "instances", ["timeline_id"], name: "index_instances_on_timeline_id", using: :btree

  create_table "timelines", force: :cascade do |t|
    t.integer "user_id"
    t.integer "start_month"
    t.integer "end_month"
    t.string  "name"
  end

  add_index "timelines", ["user_id"], name: "index_timelines_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
  end

  add_foreign_key "instances", "instance_colours"
  add_foreign_key "instances", "timelines"
  add_foreign_key "timelines", "users"
end

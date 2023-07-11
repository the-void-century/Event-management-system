# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_11_110213) do
  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "location"
    t.date "date"
    t.integer "fees"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profileusers", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.date "dob"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "registereds", force: :cascade do |t|
    t.integer "profileuser_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_registereds_on_event_id"
    t.index ["profileuser_id"], name: "index_registereds_on_profileuser_id"
  end

  create_table "your_table_name", force: :cascade do |t|
    t.integer "profileuser_id"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_your_table_name_on_event_id"
    t.index ["profileuser_id"], name: "index_your_table_name_on_profileuser_id"
  end

  add_foreign_key "registereds", "events"
  add_foreign_key "registereds", "events", on_delete: :cascade
  add_foreign_key "registereds", "profileusers"
  add_foreign_key "registereds", "profileusers", on_delete: :cascade
  add_foreign_key "your_table_name", "events"
  add_foreign_key "your_table_name", "profileusers"
end

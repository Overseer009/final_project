class CreateTimelines < ActiveRecord::Migration
  def change
    create_table :timelines do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :start_month
      t.integer :end_month
    end
  end
end

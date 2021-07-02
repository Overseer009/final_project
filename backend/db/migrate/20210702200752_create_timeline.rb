class CreateTimeline < ActiveRecord::Migration
  def change
    create_table :timelines do |t|
      t.integer :start_month
      t.integer :end_month

      t.timestamps null: false
    end
  end
end

class CreateInstances < ActiveRecord::Migration
  def change
    create_table :instances do |t|
      t.string :name
      t.text :description
      t.date :instance_date
      t.string :instance_image

      t.timestamps null: false
    end
  end
end

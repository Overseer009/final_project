class CreateInstances < ActiveRecord::Migration
  def change
    create_table :instances do |t|
      t.references :timeline, index: true, foreign_key: true
      t.references :instance_colour, index: true, foreign_key: true
      t.string :name
      t.text :description
      t.date :instance_date
      t.string :instance_image
    end
  end
end

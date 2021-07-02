class CreateInstanceColour < ActiveRecord::Migration
  def change
    create_table :instance_colours do |t|
      t.string :colour
    end
  end
end

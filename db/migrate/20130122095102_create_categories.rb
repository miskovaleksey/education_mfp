class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :foursquare_id
      t.string :foursquare_name
      t.string :name
      t.integer :main_category_id

      t.timestamps
    end
  end
end

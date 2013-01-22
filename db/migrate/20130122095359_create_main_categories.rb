class CreateMainCategories < ActiveRecord::Migration
  def change
    create_table :main_categories do |t|
      t.string :name
      t.integer :category_id

      t.timestamps
    end
  end
end

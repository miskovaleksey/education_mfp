class RemoveColumnMainCategory < ActiveRecord::Migration
  def change
    remove_column :main_categories, :category_id
  end
end

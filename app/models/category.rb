class Category < ActiveRecord::Base
  attr_accessible :foursquare_id, :foursquare_name, :main_category_id, :name

  belongs_to :main_category
end

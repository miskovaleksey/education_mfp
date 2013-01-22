class MapsController < ApplicationController

  def index
    @categories = Category.all.group_by(&:main_category_id)
    @main_category = MainCategory.all
    @ages = Age.all
    @dates = ['Today', 'Tomorrow', 'This week']
  end
end

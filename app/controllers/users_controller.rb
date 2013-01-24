class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    
    user = User.create_of_app(params[:user])
  end
end

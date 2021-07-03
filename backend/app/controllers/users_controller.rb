class UsersController < ApplicationController

  def index
    @users = User.all

    render json: @users
  end
  
  def create
    user = User.new(user_params)
    puts params
  end

  private
  def user_params
    params.permit(:name, :email, :password)
  end
end







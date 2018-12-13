class Api::SearchController < ApplicationController
  def search
    @users = User.where("LOWER(first_name) LIKE :input OR LOWER(last_name) LIKE :input", input: "%#{params[:input].downcase}%")
    render 'api/users/index'
  end
end
# tp6 search by "erts" will crash

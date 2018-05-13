class Api::PostsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @posts = Post.all
    render :index
  end
# @posts = Post.all.includes(:author)
  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :post
  end

  private

  def post_params
    params.require(:post).permit(:body, :post_image_url)
  end

end

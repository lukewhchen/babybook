class Api::PostsController < ApplicationController
  before_action :ensure_logged_in
  PhotoLibrary = ["youcan.jpg", "hithere.jpeg", "cutebaby.jpg", "bestfriend.jpg", "george.jpg", "kobebaby.jpg"]

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.image_file_name.nil?
      ran_idx = rand(PhotoLibrary.length)
      @post.image = File.open(File.join(Rails.root, 'app', 'assets', 'images', PhotoLibrary[ran_idx]))
    end
    debugger

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
    @post.destroy!
    render :post
  end

  private

  def post_params
    params.require(:post).permit(:body, :image)
  end
end

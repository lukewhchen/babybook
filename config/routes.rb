Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destory]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    get 'search/:input', to: 'search#search'
  end
end

Rails.application.routes.draw do
  resources :posts do
    member do
      post :like
    end
  end
  root 'home#index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

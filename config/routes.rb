Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :boats, only: [:index, :create, :update, :destroy]
  end
end

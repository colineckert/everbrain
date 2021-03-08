Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notebooks, except: [:edit, :new]
    resources :notes, except: [:edit, :new]
    resources :tags, except: [:edit, :new]
  end
end

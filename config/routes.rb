Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notes, except: [:edit, :new] do 
      resources :note_tags, only: [:create, :destroy]
    end

    resources :notebooks, except: [:edit, :new]
    resources :tags, except: [:edit, :new, :update]
  end
end

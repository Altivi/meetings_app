Rails.application.routes.draw do

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      root 'meetings#index', as: :root
      resources :meetings, only: [:index, :show, :create] do
        resources :highlights, only: [:create]
      end
    end
  end

  root 'react#index'
  get '*path', to: 'react#index'
end

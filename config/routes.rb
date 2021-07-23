Rails.application.routes.draw do
  root to: 'additions#index'
  resources :additions, only: [:index] do
    collection do 
      get 'done'
    end
  end
end

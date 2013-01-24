MfpEducation::Application.routes.draw do

  get "users/new"
  post "users/create"

  resources :sessions, :only => [:new, :create, :destroy]
  get '/signin'  => 'sessions#new',    as: 'signin'

  resources :users
  get '/signup' => 'users#new', as: 'signup'

  get 'about'   => 'pages#about',    as: 'about'
  get 'contact' => 'pages#contact',  as: 'contact'
  
  root to: 'maps#index'
end

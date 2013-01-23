MfpEducation::Application.routes.draw do

  get "users/new"
  post "users/create"

  resources :session, :only => [:new, :create, :destroy]
  get 'signin'  => 'session#new',    as: 'signin'
  post 'aut' => 'session#create', as:'aut'

  get 'about'   => 'pages#about',    as: 'about'
  get 'contact' => 'pages#contact',  as: 'contact'
  
  root to: 'maps#index'
end

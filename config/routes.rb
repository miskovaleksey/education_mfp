MfpEducation::Application.routes.draw do

  get 'about'   => 'pages#about',    as: 'about'
  get 'contact' => 'pages#contact',  as: 'contact'
  get 'signin'  => 'session#signin', as: 'signin'
  
  root to: 'maps#index'
end

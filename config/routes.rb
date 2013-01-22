MfpEducation::Application.routes.draw do

  get 'about'   => 'pages#about',    as: 'about'
  get 'contact' => 'pages#contact',  as: 'contact'
  
  root to: 'maps#index'
end

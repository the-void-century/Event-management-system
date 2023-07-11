Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "main#index"
  get "/login", to: "main#login"
  get "/signup", to: "main#signup"
end

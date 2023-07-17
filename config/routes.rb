Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "event#index"
  get "/login", to: "main#login"
  get "/signup", to: "main#signup"
  get "/logout", to: "main#logout"
  get "event/create", to: "event#eventcreate"
  get "event/update/:id", to: "event#event_update"
  get "event/:id", to: "event#individual"
  get "/user", to: "user#user_page"
  get "/current", to: "registered#listcurrentevents"
  get "event/:id/participants", to: "registered#event_participants"
  post "/login", to: "main#login"
  post "user/create", to: "user#create"
  post "user/update/:id", to: "user#update"
  post "user/delete/:id", to: "user#delete"
  post "event/create", to: "event#create"
  post "event/update/:idd", to: "event#update"
  get "event/delete/:id", to: "event#delete"
  get "register/:id", to: "registered#register"
  get "unregister/:id", to: "registered#unregister"
end
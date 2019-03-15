Rails.application.routes.draw do
  get '/', to: "welcome#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/', to: "welcome#process_split"

end

class MainController<ApplicationController
    before_action :set_cache_headers
    protect_from_forgery prepend: true
    #skip_before_action :verify_authenticity_token
    before_action :is_logged_in, only: [:login, :signup]
    # def index
    # end
    def login
        @current=session[:userid]
        @role=session[:role]
        @form_token=form_authenticity_token
        puts "HI I AM UTSAV" 
        if request.post?
            puts params
            user=Profileuser.find_by(username: params[:username])
            if user.present?
                puts "YES THE USER IS HERE BESTIEE"
                if user.password == params[:password]
                    session[:userid]=user.id
                    session[:role]=user.role
                    puts session[:userid]
                    redirect_to :signup
                else
                    puts "INVALID PASSWORD"
                    return render json: {body: 'Invalid password'}, status: :unauthorized
                end
            else
                puts "INVALID USERNAME"
                return render json: {body: 'Invalid username'}, status: :unauthorized
                #redirect_to event: :create
            end
        end
        puts "CONDITION RUNS WITHOUT ANY BREAKS"
    end    
    def authenticate
        puts session[:userid]
        if session[:userid].nil?
            puts session[:userid]
            redirect_to :login
        end
    end
    def authorize
        if session[:role].nil?
            redirect_to :root
        else
            if session[:role]!= "admin"
                redirect_to :root
            end
        end
    end
    def authorize_editor
        if session[:role].nil?
            redirect_to :root
        else
            if session[:role]!= "Editor" || session[:role]!="admin"
                redirect_to :root
            end
        end
    end
    def logout
        puts "ITS GIVING"
        session.delete(:userid)
        session.delete(:role)
        redirect_to :login
    end
    def signup
        
        @current=session[:userid]
        @role=session[:role]
    end
    def edituser
        @current=session[:userid]
    end
    def is_logged_in
        if session[:userid].present?
            redirect_to :root
        end
    end
    def set_cache_headers
        puts "Cache headers are being sent"
        response.headers["Cache-Control"] = "no-cache, no-store"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "Mon, 01 Jan 1990 00:00:00 GMT"
    end
end
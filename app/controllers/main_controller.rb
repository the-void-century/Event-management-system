class MainController<ApplicationController
    protect_from_forgery prepend: true
    skip_before_action :verify_authenticity_token
    before_action :is_logged_in, only: [:login, :signup]
    # def index
    # end
    def login
        @current=session[:userid]
        @role=session[:role]
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
end
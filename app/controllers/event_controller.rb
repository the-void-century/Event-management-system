class EventController < MainController
    protect_from_forgery prepend: true
    skip_before_action :verify_authenticity_token, only: [:create, :update]
    skip_parameter_encoding :show
    before_action :authenticate, only: [:create, :update, :eventcreate, :delete]
    before_action :authorize, only: [:create, :update, :eventcreate, :delete]
    def eventcreate
        @current=session[:userid]
        @role=session[:role]
    end
    def individual
        @current=session[:userid]
        @role=session[:role]
        puts @role.to_s+"-----------------------------------------------------------"
        @event = Event.find_by(id: params[:id])
        @registered= Registered.where(profileuser_id: session[:userid])
        unless @registered.nil?
            @registered=@registered.pluck(:event_id)
        else
            @registered=[-1]
        end
    end
    def index
        @current=session[:userid]
        @role=session[:role]
        puts @current.nil?        
        @event=Event.all
        @registered= Registered.where(profileuser_id: session[:userid])
        unless @registered.nil?
            @registered=@registered.pluck(:event_id)
        else
            @registered=[-1]
        end
        @event=@event.where("title LIKE ?",@event.sanitize_sql_like(params[:search]) + "%") if params[:filter]=="Title"
        @event=@event.where("category LIKE ?",@event.sanitize_sql_like(params[:search]) + "%") if params[:filter]=="Category"
        @event=@event.where("fees > ?" ,params[:minimum]) if params[:minimum].present?
        @event=@event.where("fees < ?", params[:maximum]) if params[:maximum].present?
        @event= @event.order(:date) if params[:sort]=="Latest"
        @event= @event.order(date: :desc) if params[:sort]=="Oldest"
        # if params[:isSearching].present?
        #     if params[:search].present?
        #         if params[:search]==""
        #             @event=Event.all
        #         end
        #         if params[:filter]=="Title"
        #             @event=@event.where("title LIKE ?",@event.sanitize_sql_like(params[:search]) + "%")
        #         elsif params[:filter]=="Category"
        #             @event=@event.where("category LIKE ?",@event.sanitize_sql_like(params[:search]) + "%")
        #         end 
        #         if params[:minimum].present?
        #             puts "The condition is running, seems like an issue with the query syntax"
        #             @event=@event.where("fees > ?" ,params[:minimum])
        #         end
        #         if params[:maximum].present?
        #             @event=@event.where("fees < ?", params[:maximum])
        #         end                 
        #     end
            
        #     if params[:sort].present?  
        #         if params[:sort]=="Latest"
        #             @event= @event.order(:date)
        #         elsif params[:sort]=="Oldest"
        #             @event= @event.order(date: :desc)
        #         end
                
        #     end
            
        render partial: 'event_card', collection: @event, as: :event if params[:isSearching].present?
        #end
      
       #return render json: {message: params}, status: :created
    end
    def create
        @current=session[:userid]
        @role=session[:role]
        event = Event.new
        event.title = params[:title]
        event.description = params[:description]
        event.location = params[:location]
        event.date = params[:date]
        event.fees=params[:fees]
        event.seat=params[:seat]
        event.category = params[:category]
        event.eventposter.attach(params[:eventposter]) if params[:eventposter].present?
        if event.save
            return render json: {message: "Event created successfully"}, status: :created
        else
            return render json: {message: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def update
        @current=session[:userid]
        @role=session[:role]
        @event = Event.find_by(id:params[:idd])
        event_a= Event.find_by(id:params[:idd]) 
        if params.has_key?(:title)
            ecurrentvent_a.title=params[:title]
        end
        if params.has_key?(:description)
            event_a.description=params[:description]
        end
        if params.has_key?(:location)
            event_a.location=params[:location]
        end
        if params.has_key?(:date)
            event_a.date=params[:date]
        end
        if params.has_key?(:seat)
            event_a.seat=params[:seat]
        end
        if params.has_key?(:fees)
            event_a.fees=params[:fees]
        end
        if params.has_key?(:category)
            event_a.category=params[:category]
        end
        if params.has_key?(:eventposter)
            event_a.eventposter=params[:eventposter]
        end
        if event_a.save
            render json: {message: 'Event updated successfully'}, status: :created
        else
            render json: {message: event_a.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def delete
        event = Event.find_by(id:params[:id])
        if event.destroy
            redirect_to :root
        else
            render json: {message: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def event_update
        @event = Event.find_by(id:params[:id])
    end
end

class RegisteredController < EventController
    before_action :set_cache_headers
    before_action :authenticate, only: [:register, :unregister,:listcurrentevents]
    before_action :authorize, only: [:event_participants]
    def register
        registered=Registered.new
        registered.event_id= params[:id]
        registered.profileuser_id= session[:userid]
        event=Event.find_by(id: params[:id])
        if event.seat=="Sold Out"
            redirect_to :root
        end
        x=event.seat.to_i
        x-=1
        event.seat=x.to_s
        if event.seat=="0"
            event.seat="Sold Out"
        end
        if registered.save && event.save
            redirect_to :root
            return
        else
            redirect_to :root
            return
        end
    end
    def unregister
        registered=Registered.find_by(event_id: params[:id], profileuser_id: session[:userid])
        event=Event.find_by(id: params[:id])
        x=event.seat.to_i
        x+=1
        event.seat=x.to_s
        if registered.destroy && event.save
            redirect_to :root
        else
            redirect_to :root
        end
    end
    def listcurrentevents
        @role=session[:role]
        @current=session[:userid]
        @registered= Registered.where(profileuser_id: session[:userid])
        unless @registered.nil?
            @registered=@registered.pluck(:event_id)
        else
            @registered=[-1]
        end
        @event = Event.joins(:registereds).where(registereds: { profileuser_id: session[:userid] }).select('events.*')
        #puts @event+"-------------------------"
    end
    def event_participants
        @role=session[:role]
        @current=session[:userid]
        @user = Profileuser.joins(:registereds).where(registereds: { event_id: params[:id] }).select('profileusers.*')
        #puts @people+"-----------------------------"
    end
end


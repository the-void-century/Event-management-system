class RegisteredController < EventController
    def register
        registered=Registered.new
        registered.event_id= params[:id]
        registered.profileuser_id= session[:userid]
        if registered.save
            redirect_to :root
        else
            redirect_to :root
        end
    end
    def unregister
        registered=Registered.find_by(event_id: params[:id], profileuser_id: session[:userid])
        if registered.destroy
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


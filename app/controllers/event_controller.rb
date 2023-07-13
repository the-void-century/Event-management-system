class EventController < ApplicationController
    def index
        event=Event.all
        render json: {message: user}, status: :success
    end
    def create
        event = Event.new
        event.title = params[:title]
        event.description = params[:description]
        event.location = params[:location]
        event.date = params[:date]
        event.fees=params[:fees]
        event.category = params[:category]
        if event.save
            return render json: {message: "Event created successfully"}, status: :created
        else
            return render json: {message: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def update
        event = Event.find(params[:id])
        if event.has_key?(params[:title])
            event.title=params[:title]
        end
        if event.has_key?(params[:description])
            event.description=params[:description]
        end
        if event.has_key?(params[:location])
            event.location=params[:location]
        end
        if event.has_key?(params[:date])
            event.date=params[:date]
        end
        if event.has_key?(params[:fees])
            event.fees=params[:fees]
        end
        if event.has_key?(params[:category])
            event.category=params[:category]
        end
        if user.save
            render json: {message: 'Event updated successfully'}, status: :created
        else
            render json: {message: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def delete
        event = Event.find(params[:id])
        if user.destroy
            render json: {message: 'Event updated successfully'}, status: :created
        else
            render json: {message: event.errors.full_messages}, status: :unprocessable_entity
        end
    end
end

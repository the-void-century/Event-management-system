class UserController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create, :update]
    skip_parameter_encoding :show

    def create
        user=Profileuser.new
        user.firstname = params[:firstname]
        user.lastname = params[:lastname]
        user.email = params[:email]
        user.password = params[:password]
        user.dob=params[:dob]
        user.username = params[:username]
        user.role = params[:role]
        user.profilepicture.attach(params[:profilepicture]) if params[:profilepicture].present?
        # render json: {message: params[:user]}, status: :created
        if user.save
            render json: {message: 'User created successfully'}, status: :created
        else
            render json: {message: user.errors.full_messages}, status: :unprocessable_entity
        end        
    end
    def update
        user=Profileuser.find_by(id:params[:id])
        if params.has_key?(:username)
            user.username=params[:username]
        end
        if params.has_key?(:password)
            user.password=params[:password]
        end
        if params.has_key?(:firstname)
            user.firstname=params[:firstname]
        end
        if params.has_key?(:lastname)
            user.lastname=params[:lastname]
        end
        if params.has_key?(:email)
            user.email=params[:email]
        end
        if params.has_key?(:dob)
            user.dob=params[:dob]
        end
        if user.save
            render json: {message: 'User created successfully'}, status: :created
        else
            render json: {message: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def delete
        user = User.find(params[:id])
        if user.destory
            render json: {message: 'User deleted successfully'}, status: :created
        else
            render json: {message: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def post_params
        params.require(:profileusers).permit(:username,:firstname,:lastname,:email,:password,:role,:dob)
    end
end
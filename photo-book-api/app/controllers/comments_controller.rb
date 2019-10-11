class CommentsController < ApplicationController
    
    def index
        
    end

    def show
        
    end

    def create
        @comment = Commment.new(comment_params)
        if @comment.save
            render json: @comment
        else
            render json: { errors: @comment.errors.full_messages }
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:commentor, :content)
    end
end

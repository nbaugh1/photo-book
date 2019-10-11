class PhotosController < ApplicationController
    
    def index
        @photos = Photo.all
        render json: @photos
    end

    def show
        set_photo
        render json: @photo
    end

    private

    def set_photo
        @photo = Photo.find_by_id(params[:id])
    end

    def photo_param
        params.require(:photo).permit(:imgur_link, :info)
    end

end

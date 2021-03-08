class Api::TagsController < ApplicationController

  def index
    @tags = current_user.tags
    render :index
  end

  def show
    @tag = selected_tag
    render :show
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 401
    end
  end

  def destroy
    @tag = selected_tag
    if @tag && @tag.destroy
      render :show
    else
      render json: ['Tag does not exist']
    end
  end

  private

  def selected_tag
    current_user.tags.find_by(id: params[:id])
  end

  def tag_params
    params.require(:tag).permit(:name, :author_id)
  end
end

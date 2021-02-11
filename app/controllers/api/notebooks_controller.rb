class Api::NotebooksController < ApplicationController
  before_action :require_logged_in

  def index
    @notebooks = Notebook.all
    render :index
  end

  def show
    @notebook = Notebook.find_by(id: params[:id])
    render :show
  end

  def update
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 401
    end
  end

  def create
    @notebook = Notebook.new(notebook_params)

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 401
    end
  end

  def destroy
    @notebook = current_user.notebooks.find_by(id: params[:id])
    if @notebook && @notebook.destroy
      render :index
    else
      render json: ['Notebook does not exist']
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:name, :author_id)
  end
end

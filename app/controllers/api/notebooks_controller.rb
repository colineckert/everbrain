class Api::NotebooksController < ApplicationController
  before_action :require_logged_in

  def index
    @notebooks = Notebook.all
    render :index
  end

  def show
    @notebook = Notebook.find_by(id: params[:id])

    if @notebook
      render :show
    else
      render json: ["Notebook does not exit"], status: 422
    end
  end

  def update
  end

  def create
  end

  def destroy
  end

  private

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end

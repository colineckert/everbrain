class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks.order(updated_at: :desc)
    render :index
  end

  def show
    @notebook = selected_notebook
    render :show
  end

  def update
    @notebook = selected_notebook

    if @notebook && @notebook.update(notebook_params)
      render :show
    elsif !@notebook
      render json: ['Notebook does not exist'], status: 400
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
    @notebook = selected_notebook
    if @notebook && @notebook.destroy
      render :show
    else
      render json: ['Notebook does not exist']
    end
  end

  private

  def selected_notebook
    current_user.notebooks.find_by(id: params[:id])
  end

  def notebook_params
    params.require(:notebook).permit(:name, :author_id)
  end
end

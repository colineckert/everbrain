class Api::NotesController < ApplicationController

  def index
    @notes = current_user.notes.order(updated_at: :desc)
    render :index
  end

  def show
    @note = selected_note
    render :show
  end

  def update
    @note = selected_note

    if @note && @note.update(note_params)
      render :show
    elsif !@note
      render json: ['Note does not exist'], status: 400
    else
      render json: @note.errors.full_messages, status: 401
    end
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 401
    end
  end

  def destroy
    @note = selected_note
    if @note && @note.destroy
      render :show
    else
      render json: ['Note does not exist']
    end
  end

  private

  def selected_note
    current_user.notes.find_by(id: params[:id])
  end

  def note_params 
    params.require(:note).permit(:title, :body, :notebook_id)
  end

end

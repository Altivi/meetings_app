class Api::V1::MeetingsController < Api::V1::BaseController
  before_action :set_meeting, only: [:show]

  def index
    @meetings = Meeting.all.includes(:highlights)
  end

  def show; end;

  def create
    @meeting = Meeting.create(meeting_params)

    if @meeting.save
      render :show
    else
      render_error(422, 'NotSaved', @meeting.errors.full_messages.join(', '))
    end
  end

  private

  def meeting_params
    params.require(:meeting).permit(
      :title,
      :organizer_email,
      :start_time,
      :end_time,
      :audio_file_location,
      highlights_attributes: [
        :highlight_text,
        :start_time,
        :end_time
      ]
    )
  end

  def set_meeting
    @meeting = Meeting.find(params[:id])
  end
end

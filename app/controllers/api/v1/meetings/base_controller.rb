class Api::V1::Meetings::BaseController < Api::V1::BaseController
  before_action :set_meeting

  private

  def set_meeting
    @meeting = Meeting.find(params[:meeting_id])
  end
end
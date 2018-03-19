class Api::V1::Meetings::HighlightsController < Api::V1::Meetings::BaseController
  def create
    @highlight = @meeting.highlights.create(highlight_params)

    if @highlight.save
      render :show
    else  
      render_error(422, 'NotSaved', @highlight.errors.full_messages.join(', '))
    end
  end

  private

  def highlight_params
    params.require(:highlight).permit(
      :highlight_text,
      :start_time,
      :end_time
    )
  end
end

require "acceptance_helper"

resource "Highlights", acceptance: :request do
  let!(:meeting) { create :meeting }

  post "/api/v1/meetings/:meeting_id/highlights" do
    let!(:meeting_id) { meeting.id }
    let!(:highlight_text) { "Text" }
    let!(:start_time) { DateTime.now }
    let!(:end_time) { DateTime.now + 1.minutes }

    with_options scope: :highlight do
      parameter :highlight_text, 'Highlight text'
      parameter :start_time, 'Highlight start time'
      parameter :end_time, 'Highlight end time'
    end

    example_request 'Create highlight' do
      expect(status).to eq 200
    end
  end
end
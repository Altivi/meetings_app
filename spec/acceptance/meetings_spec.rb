require "acceptance_helper"

resource "Meetings", acceptance: :request do
  let!(:meeting) { create :meeting }
  let!(:meetings) { 3.times { create :meeting } }

  get "/api/v1/meetings" do
    example_request 'Get all meetings' do
      expect(status).to eq 200
    end
  end

  post "/api/v1/meetings" do
    let!(:meeting_title) { 'Title' }
    let!(:meeting_organizer_email) { 'Post' }
    let!(:meeting_start_time) { 'Test Comment' }
    let!(:meeting_end_time) { 'Test Comment' }
    let!(:meeting_audio_file_location) { 'Test Comment' }

    with_options scope: :meeting do
      parameter :title, 'Meeting title'
      parameter :organizer_email, 'Meeting organizer_email'
      parameter :start_time, 'Meeting start_time'
      parameter :end_time, 'Meeting end_time'
      parameter :audio_file_location, 'Meeting audio_file_location'
    end
    parameter "meeting[highlights_attributes][highlight_text]", "Highlight text"
    parameter "meeting[highlights_attributes][start_time]", "Highlight start time"
    parameter "meeting[highlights_attributes][end_time]", "Highlight end time"

    example_request 'Create Comment' do
      expect(status).to eq 200
    end
  end

  get "/api/v1/meetings/:id" do
    let!(:id) { meeting.id }
    parameter :id, "Meeting ID", required: true

    example_request 'Get specific meeting' do
      expect(status).to eq 200
    end
  end
end
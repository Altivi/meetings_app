json.(meeting, :id, :title, :organizer_email, :start_time, :end_time, :audio_file_location)

json.highlights do
  json.array! meeting.highlights do |highlight|
    json.partial! "api/v1/meetings/highlights/highlight", highlight: highlight
  end
end

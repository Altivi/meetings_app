json.meetings do
  json.array! @meetings do |meeting|
    json.partial! 'api/v1/meetings/short_meeting', meeting: meeting
  end
end

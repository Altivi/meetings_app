FactoryBot.define do
  factory :meeting do
    title 'Title'
    organizer_email 'testemail'
    start_time { DateTime.now }
    end_time { DateTime.now + 1.hour }
    audio_file_location 'location.com'
  end
end

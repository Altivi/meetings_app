class CreateMeetings < ActiveRecord::Migration[5.1]
  def change
    create_table :meetings do |t|
      t.string :title
      t.string :organizer_email
      t.datetime :start_time
      t.datetime :end_time
      t.string :audio_file_location

      t.timestamps
    end
  end
end

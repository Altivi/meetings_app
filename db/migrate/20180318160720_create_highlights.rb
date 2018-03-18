class CreateHighlights < ActiveRecord::Migration[5.1]
  def change
    create_table :highlights do |t|
      t.references :meeting, foreign_key: true
      t.datetime :start_time
      t.datetime :end_time
      t.text :highlight_text

      t.timestamps
    end
  end
end

class Highlight < ApplicationRecord
  belongs_to :meeting

  validates :start_time, :end_time, :highlight_text, presence: true
  validates_with TimeGapValidator
end

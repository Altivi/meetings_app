class Meeting < ApplicationRecord
  has_many :highlights

  accepts_nested_attributes_for :highlights

  validates :title, :organizer_email, :start_time, :end_time, presence: true
  validates_with TimeGapValidator
end

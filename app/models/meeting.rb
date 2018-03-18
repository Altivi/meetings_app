class Meeting < ApplicationRecord
  has_many :highlights

  accepts_nested_attributes_for :highlights
end

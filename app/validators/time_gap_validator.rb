class TimeGapValidator < ActiveModel::Validator
  def validate(record)
    if record.start_time >= record.end_time
      record.errors.add(:end_time, "must be after start time")
    end
  end
end
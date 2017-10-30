class Todo < ApplicationRecord
  validates_presence_of :description

  scope :complete, -> { where.not(completed_at: nil) }
  scope :incomplete, -> { where(completed_at: nil) }
end

class Boat < ApplicationRecord
  COLORS = ["red", "orange", "yellow", "green", "blue", "navy", "purple"]

  validates :name, :length, :color, presence: true
  validates :length, numericality: { only_integer: true,
    greater_than_or_equal_to: 10, less_than_or_equal_to: 216 }
  # Note: The largest yacht in Newport Beach is 216 ft...
  validates :color, inclusion: { in: COLORS }
  validates :spot_number, uniqueness: true, numericality: { only_integer: true,
    greater_than_or_equal_to: 1, less_than_or_equal_to: 20 }, allow_nil: true
  # Note: Validate uniqueness to ensure that there is only 1 boat per spot.
  # Allows nil in case I need to have boats in standby for switching.. not sure
  # yet.
end

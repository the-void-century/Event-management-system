class Event < ApplicationRecord
    has_one_attached :eventposter
    has_many :registereds
end

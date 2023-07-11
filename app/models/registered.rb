class Registered < ApplicationRecord
  belongs_to :profileuser
  belongs_to :event
end

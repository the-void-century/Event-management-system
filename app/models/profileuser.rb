class Profileuser < ApplicationRecord
  has_one_attached :profilepicture
  has_many :registereds
end

class Photo < ApplicationRecord
    validates :imgur_link, presence: true
    has_many :comments
end

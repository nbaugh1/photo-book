class Comment < ApplicationRecord
    validates :commentor, presence: true
    validates :content, presence: true
    belongs_to :photo
end

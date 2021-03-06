# frozen_string_literal: true

class Post < ApplicationRecord
  has_rich_text :content
  def like!
    increment!(:likes_count)
  end
end

class PagesController < ApplicationController
  def index
    render component: "Pages"
  end
end

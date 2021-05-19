class PagesController < ApplicationController
  def index
    @pages = Page.all
    render component: "Pages", props:{pages:@pages}
  end
end

class PagesController < ApplicationController
  def index
    @pages = Page.all
    render component: "Pages", props:{pages:@pages}
  end

  def show
    @page = Page.find(params[:id])
    render component: "Page", props:{page:page}
  end
  def destroy
    @page = Page.find(params[:id])
    @page.destroy
    redirect_to pages_path
  end
  def new
    render component: "PageNew"
  end
  def create
    # create page here
  end

end

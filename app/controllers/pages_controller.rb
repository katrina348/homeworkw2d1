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
  def edit
    @page = Page.find(params[:id])
    render component: "PageEdit",props:{page:@page}
  end

  def create
    # create page here
    page = Page.new(page_params)
    if page.save
      redirect_to pages_path
    else
      # page doesn't save... worry about this later
      # want to send a message back to user about why
    end
  end

  def update
    @page = Page.find(params[:id])
    if(@page.update(page_params))
      redirect_to pages_path
    else
      # page doesn't save... worry about this later
      # want to send a message back to user about why
    end
  end

  private
  def page_params
    params.require(:page).permit(:title, :author, :body)
  end
end

class WelcomeController < ApplicationController
  def home
  
  end

  def calculated

  end

  def process_split
    @amount = params[:amount]
    @taxes = params[:taxes]
    @tips = params[:tips]
    @people = params[:people]

    render :home
  end


end

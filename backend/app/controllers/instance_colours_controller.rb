class InstanceColoursController < ApplicationController

  def index
    @instance_colours = InstanceColour.all

    render json: @instance_colours
  end

end

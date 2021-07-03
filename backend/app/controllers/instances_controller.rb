class InstancesController < ApplicationController

  def index
    @instances = Instance.all

    render json: @instances
  end


end

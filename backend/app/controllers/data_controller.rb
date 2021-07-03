class DataController < ApplicationController

  def index
    @users = User.all
    @timelines = Timeline.all
    @instances = Instance.all
    @instance_colours = InstanceColour.all
    render json: @users
  end
end

class TimelinesController < ApplicationController

  def index
    @timelines = Timeline.all

    render json: @timelines
  end

end

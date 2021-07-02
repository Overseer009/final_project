class Test1Controller < ApplicationController

  def index
    @obj1 = {
      fruit: "apple",
      vege: "cucumber"
    }

    render json: @obj1
  end

end

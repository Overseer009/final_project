class User < ActiveRecord::Base

  has_many :timelines, :dependent => :delete_all

end

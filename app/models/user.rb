class User < ActiveRecord::Base
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  
  attr_accessible :email, :name, :password, :phone

  validates :name, :email, :password, :presence => true
  validates :email, :format => { :with => email_regex },
                    :uniqueness => { :case_sensitive => false}
  validates :name, :uniqueness => { :case_sensitive => false}
end

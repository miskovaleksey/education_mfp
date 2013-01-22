source 'https://rubygems.org'

gem 'rails', '3.2.6'

gem 'mysql2'



# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3' # JavaScript compressor.
  gem 'therubyracer', '~> 0.10.2', platforms: :ruby
  gem 'less-rails', '~> 2.2.6'
  gem 'twitter-bootstrap-rails', '~> 2.1.8'
end

gem 'jquery-rails'


group :development do
  gem 'thin'
  gem 'quiet_assets'
  gem 'mina', '~> 0.2.1'
end

group :production do
  gem 'unicorn', '~> 4.4.0'
  gem 'therubyracer', '~> 0.10.2', platforms: :ruby
end
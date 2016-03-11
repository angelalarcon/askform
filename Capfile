# Load DSL and set up stages
require 'capistrano/setup'

require 'capistrano/deploy'
require 'capistrano/bundler'
require 'capistrano/rails'
require 'capistrano/rvm'
set :rvm_type, :user
set :rvm_ruby_version, '2.2.4p230'

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }

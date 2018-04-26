require 'html-proofer'
require 'find'
require 'w3c_validators'
require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:spec)

task :build do
  sh "bundle exec jekyll build"
end

task :proof do
  ignored = [
    '#',
    /username.github.io/,
    /bandname.github.io/
  ]

  HTMLProofer.check_directory("./_site",
                               ssl_verifypeer: false,
                               timeout: 30,
                               url_ignore: ignored,
                              ).run
end

namespace :validate do
  include W3CValidators

  task :html do
  @html_v = NuValidator.new

    Find.find('_site') do |path|
      if File.basename(path) == 'index.html'
        File.open path do |f|
          print "Validating #{path}... "
          results = @html_v.validate_file f

          if results.errors.length > 0
            puts results.errors
            exit
          end
          puts 'done'
        end
      end
    end
  end

  task :css do
    @validator = CSSValidator.new
    print "Validating css... "
    results = @validator.validate_file('_site/css/styles.css')

    if results.errors.length > 0
      puts results.errors
      exit
    end
    puts 'done'
  end
end

task :default => [:build, :proof, 'validate:html']

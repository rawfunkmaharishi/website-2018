require 'fileutils'
require 'find'
require 'html-proofer'
require 'w3c_validators'
require 'rspec/core/rake_task'

BUILD_DIR = 'spec/_site'

namespace :site do
  desc "Build site (at #{BUILD_DIR}, purely for the tests)"
  task build: :cleanup do
    sh "bundle exec jekyll build -d #{BUILD_DIR}"
  end

  desc "Remove #{BUILD_DIR}"
  task :cleanup do
    print 'Cleaning up... '
    FileUtils.rm_rf BUILD_DIR
    puts 'done'
  end
end

desc "Run HTML-proofer against #{BUILD_DIR}"
task proof: 'site:build' do
  ignored = [
    /localhost/,
    /oembed-sounds/,
    /username.github.io/,
    /bandname.github.io/
  ]

  options = {
    assume_extension: true,
    allow_hash_href: true,
    check_opengraph: true,
    ssl_verifypeer: false,
    timeout: 60,
    url_ignore: ignored
  }

  HTMLProofer.check_directory("#{BUILD_DIR}", options).run
end

namespace :validate do
  include W3CValidators

  desc "Validate HTML files in #{BUILD_DIR}"
  task html: 'site:build' do
    @html_v = NuValidator.new

    count = 0
    print 'Validating HTML'
    Find.find("#{BUILD_DIR}") do |path|
      if File.basename(path) == 'index.html'
        File.open path do |f|
          print "."
          count += 1
          results = @html_v.validate_file f

          if results.errors.length > 0
            puts results.errors
            exit
          end
        end
      end
    end
    puts " #{count} pages validated successfully"
  end

  desc "Validate CSS (doesn't really work very well)"
  task css: 'site:build' do
    @validator = CSSValidator.new
    print "Validating css... "
    results = @validator.validate_file("#{BUILD_DIR}/css/styles.css")

    if results.errors.length > 0
      puts results.errors
      exit
    end
    puts 'done'
  end
end

task spec: 'site:build' do
  RSpec::Core::RakeTask.new(:spec)
end

task :default => [
  'site:build',
  :spec,
  :proof,
  'validate:html'
]

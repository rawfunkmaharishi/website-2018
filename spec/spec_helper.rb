require 'json'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end

class JSONMunger
  attr_reader :actual, :expected

  def initialize path
    @expected = JSON.parse(File.read "spec/fixtures/json-ld#{path}.json")
    fixture = File.readlines "_site#{path}/index.html"
    buffer = []
    i = fixture.index { |line| line =~ /json/ } + 1

    loop do
      if fixture[i] =~ /<\/script>/
        break
      else
        buffer.push fixture[i]
      end
      i += 1
    end

    @actual = JSON.parse(buffer.join)
  end
end

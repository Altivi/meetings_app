require 'rails_helper'
require 'rspec_api_documentation'
require 'rspec_api_documentation/dsl'

RspecApiDocumentation.configure do |config|
  config.format = :json
  config.curl_host = nil
  config.api_name = 'Fitnessapp API'
  config.request_headers_to_include = ['Content-Type', 'Access-Token']
  config.response_headers_to_include = ['Content-Type', 'Access-Token']
  config.curl_headers_to_filter = ["Cookie", 'Host'] # Remove this if you want to show Auth headers in request
  config.keep_source_order = true
  config.request_body_formatter = Proc.new do |params|
    if RSpec.current_example.metadata[:headers].try(:[], 'Content-Type').eql?('application/json')
      params&.to_json
    else
      params
    end
  end
end

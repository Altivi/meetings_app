class Api::V1::BaseController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActionController::ParameterMissing, with: :render_parameter_missing

  respond_to :json

  def render_not_found(e)
    render_error(404, 'NotFound', e.message.sub(/ with.*/, ''))
  end

  def render_parameter_missing(e)
    render_error(422, 'ParameterMissing', e.message)
  end
  
  def render_error(status, type, message)
    json = { type: type, message: message }
    render json: json, status: status
  end

  def render_success(message)
    json = { message: message }
    render json: json, status: 200
  end
end
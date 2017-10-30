class Api::ApiController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def render_object_errors(object)
    render json: { error: object.errors }, status: :unprocessable_entity
  end
end

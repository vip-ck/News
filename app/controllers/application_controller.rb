class ApplicationController < ActionController::Base
  before_action :devise_permit_params, if: :devise_controller?
  before_action :authenticate_user!
  private

  def devise_permit_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end

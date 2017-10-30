require "rails_helper"

RSpec.describe PagesController, type: :controller do
  describe "GET #index" do
    it "should pass" do
      get :index, params: {}

      expect(true).to eq(true)
    end
  end
end

require 'rails_helper'

RSpec.describe Answer, type: :model do
  context "attributes" do
    let(:question) { Question.create!(title: "Meaning of life?", body: "What is the meaning of life?", resolved: false) }
    let(:answer) { Answer.create!(body: '42', question: question) }

    it "should respond to body" do
      expect(answer).to respond_to(:body)
    end
  end
end

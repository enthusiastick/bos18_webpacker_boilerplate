class Api::V1::TodosController < Api::ApiController
  def index
    todos = Todo.all
    render json: todos
  end
end

class Api::V1::TodosController < Api::ApiController
  def index
    serialized_complete =
      ActiveModel::Serializer::CollectionSerializer.new(
        Todo.complete,
        serializer: TodoSerializer
      ).as_json
    serialized_incomplete =
      ActiveModel::Serializer::CollectionSerializer.new(
        Todo.incomplete,
        serializer: TodoSerializer
      ).as_json
    render json: { complete: serialized_complete, incomplete: serialized_incomplete }
  end
end

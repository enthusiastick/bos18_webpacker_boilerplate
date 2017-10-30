class TodoSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed_at
end

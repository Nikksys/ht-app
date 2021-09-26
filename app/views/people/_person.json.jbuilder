json.extract! person, :id, :nombre, :appellido, :telefono, :created_at, :updated_at
json.url person_url(person, format: :json)

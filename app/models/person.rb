class Person < ApplicationRecord
  validates :nombre, presence: { message: "está requerido" }
  validates :appellido, presence: { message: "está requerido" }
  validates :telefono, presence: { message: "está requerido" }, format: { with: /[0-9]/,
    message: "solo numeros" }
end

class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :nombre
      t.string :appellido
      t.string :telefono

      t.timestamps
    end
  end
end

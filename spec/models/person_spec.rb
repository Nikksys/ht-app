require 'rails_helper'

RSpec.describe Person, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  it "should persist a person" do
    Person.create(nombre: 'Paul', appellido: "Dupond", telefono: "3333333")
    expect(Person.count).to eq(1)
  end

  it "should return nombre column type as string" do
    person1 = Person.create(nombre: 'Marc')
    expect(person1.nombre.class).to eq(String)
  end
  
  it 'validates presence' do
      person2 = Person.new
      person2.nombre = '' 
      person2.validate 
      expect(person2.errors[:nombre]).to include("está requerido") 

      person2.nombre = 'Nicolas' 
      person2.validate 
      expect(person2.errors[:nombre]).to_not include("está requerido") 
    end
end
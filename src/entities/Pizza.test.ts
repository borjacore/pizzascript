import Pizza from './Pizza'
import { Topping, PizzaSizes } from "../types/global";

describe('Pizza', () => {
  const pizza = new Pizza({
    name: "Thin",
    toppings: [{id: '1', name: 'Cheese', description: 'Mozzarella'}],
    size: "Small" as PizzaSizes
  });

  it('Should have a name defined', () => {
    expect(pizza.name).toEqual('Thin')
  })
})
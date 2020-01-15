import Pizza from './Pizza'
import { toppings } from '../constants'
import { PizzaBases, PizzaSizes } from '../types/global'
import mockConsole from 'jest-mock-console'

const createPizza = (): Pizza => {
  return new Pizza({
    base: PizzaBases.DeepPan,
    toppings,
    size: PizzaSizes.Large
  })
}

describe('Pizza', () => {
  it('Should return an instance of Pizza class', () => {
    const pizza: Pizza = new Pizza()

    expect(pizza).toBeInstanceOf(Pizza)
  })

  it('When passed correct values should set properties correctly', () => {
    const pizza: Pizza = createPizza()

    expect(pizza.base).toEqual(PizzaBases.DeepPan)
    expect(pizza.toppings).toEqual(toppings)
    expect(pizza.size).toEqual(PizzaSizes.Large)
  }) 

  describe('pizza.printOrder', () => {
    it('Should print order to console', () => {
      mockConsole()
      const pizza = createPizza()

      pizza.printOrder()

      expect(console.log).toHaveBeenNthCalledWith(2, 'Your order:')
      expect(console.log).toHaveBeenNthCalledWith(5, `Base: Deep Pan`)
      expect(console.log).toHaveBeenNthCalledWith(7, `Toppings:`)
      toppings.forEach((topping) => {
        expect(console.log).toHaveBeenCalledWith(`- ${topping.description}`)
      })
      expect(console.log).toHaveBeenNthCalledWith(13, `Size: ${PizzaSizes.Large}`)
    })
  })
})
import Pizza from './Pizza'
import { toppings } from '../../constants'
import { PizzaBases, PizzaSizes, PizzaInfo } from '../../types/global'
import mockConsole from 'jest-mock-console'

const examplePizza: PizzaInfo = {
  base: PizzaBases.DeepPan,
  toppings,
  size: PizzaSizes.Large
}

const createPizza = (): Pizza => {
  return new Pizza(examplePizza)
}

describe('Pizza', () => {
  it('Should return an instance of Pizza class', () => {
    const pizza: Pizza = new Pizza()

    expect(pizza).toBeInstanceOf(Pizza)
  })

  it('Should contain the correct properties', () => {
    const pizza: Pizza = createPizza()
    expect(pizza).toMatchObject(examplePizza)
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
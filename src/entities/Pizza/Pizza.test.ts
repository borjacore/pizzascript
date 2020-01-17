import Pizza from './Pizza'
import { toppings } from '../../constants'
import { PizzaBases, PizzaSizes, PizzaInfo, Topping } from '../../types/global'
import mockConsole from 'jest-mock-console'

const examplePizza: PizzaInfo = {
  base: PizzaBases.DeepPan,
  selectedToppings: toppings,
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

  describe('pizza.getSelectedToppings', () => {
    it('Should return topping info when passed list of toppings', () => {
      const selectedToppings = Pizza.getSelectedToppings([
        'Smoked Ham',
        'Smoked Bacon'
      ])

      const expected: Topping[] = [
        { id: '2', name: 'Ham', description: 'Smoked Ham' },
        { id: '3', name: 'Bacon', description: 'Smoked Bacon' }
      ]

      expect(selectedToppings).toMatchObject(expected)
    })
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
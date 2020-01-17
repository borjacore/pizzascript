import { Topping, PizzaSizes, PizzaInfo, PizzaBases } from 'src/types/global'
import { toppings } from '../../constants'

class Pizza {
  private base?: PizzaBases
  static availableToppings: Topping[] = toppings
  private selectedToppings: Topping[] = []
  private size?: PizzaSizes 

  constructor (pizza?: PizzaInfo) {
    if (pizza) {
      this.base = pizza.base
      this.selectedToppings = pizza.selectedToppings
      this.size = pizza.size
    }
  }

  static getSelectedToppings(selected: string[]) {
    return Pizza.availableToppings.filter(value => selected.includes(value.description))
  }

  public printOrder() {
    console.log('')
    console.log('Your order:')
    console.log('-------------------------------')
    console.log('')
    console.log(`Base: ${this.base}`)
    console.log('')
    console.log('Toppings:')
    this.selectedToppings.forEach((topping) => {
      console.log(`- ${topping.description}`)
    })
    console.log('')
    console.log(`Size: ${this.size}`)
    console.log('')
  }
}

export default Pizza

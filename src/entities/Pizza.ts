import { Topping, PizzaSizes, PizzaInfo } from 'src/types/global'

class Pizza {
  public name: string
  public toppings: Topping[]
  public size: PizzaSizes 

  constructor (pizza?: PizzaInfo) {
    if (pizza) {
      this.name = pizza.name
      this.toppings = pizza.toppings
      this.size = pizza.size
    }
  }

  public printOrder() {
    console.log('Pizza Name: ', this.name)
    console.log('')
    console.log('Selected Toppings:')
    this.toppings.forEach((topping) => {
      console.log(`- ${topping}`)
    })
    console.log('')
    console.log('Selected Size: ', this.size)
  }

  public getPizzaDetails() {
    return this
  }
}

export default Pizza

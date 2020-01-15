import { Topping, PizzaSizes, PizzaInfo, PizzaBases } from 'src/types/global'

class Pizza {
  public base?: PizzaBases
  public toppings: Topping[] = []
  public size?: PizzaSizes 

  constructor (pizza?: PizzaInfo) {
    if (pizza) {
      this.base = pizza.base
      this.toppings = pizza.toppings
      this.size = pizza.size
    }
  }

  public printOrder() {
    console.log('')
    console.log('Your order:')
    console.log('-------------------------------')
    console.log('')
    console.log(`Base: ${this.base}`)
    console.log('')
    console.log('Toppings:')
    this.toppings.forEach((topping) => {
      console.log(`- ${topping.description}`)
    })
    console.log('')
    console.log(`Size: ${this.size}`)
    console.log('')
  }
}

export default Pizza

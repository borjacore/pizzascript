import Commander from 'commander'
import createPizza from './actions/createPizza'
import { PizzaSizes, PizzaBases } from './types/global'
import Pizza from './entities/Pizza'
import { toppings } from './constants'

Commander
  .version('1.0.0')
  .description('Create your own pizza')
  .command('create')
  .action(async () => {
    const answers = await createPizza(toppings)

    const selectedToppings = (selectedToppings: string[]) => {
      const selected = toppings
        .filter(value => selectedToppings.includes(value.description)) 

      return selected
    }

    if (answers) {
      // console.log(selectedToppings(answers.Toppings))
      const pizza: Pizza = new Pizza({
        base: answers['Base'] as PizzaBases,
        toppings: selectedToppings(answers['Toppings']),
        size: answers['Size'] as PizzaSizes
      })

      pizza.printOrder()
    }
  })
  
Commander.parse(process.argv)

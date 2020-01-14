import Commander from 'commander'
import createPizza from './actions/createPizza'
import {Topping, PizzaSizes, PizzaInfo} from './types/global'
import Pizza from './entities/Pizza'

Commander
  .version('1.0.0')
  .description('Create your own pizza')
  .command('create')
  .action(async () => {
    const toppings: Topping[] = [
      {
        id: '1',
        name: 'Cheese',
        description: 'Mozzarella'
      },
      {
        id: '2',
        name: 'Ham',
        description: 'Smoked Ham'
      },
      {
        id: '3',
        name: 'Bacon',
        description: 'Smoked Bacon'
      },
      {
        id: '4',
        name: 'Tomato',
        description: 'Fresh Tomato Slice'
      }
    ]

    const answers = await createPizza(toppings)

    if (answers) {
      const pizza: Pizza = new Pizza({
        name: answers['Base'] as string,
        toppings: answers['Toppings'] as Topping[],
        size: answers['Size'] as PizzaSizes
      })

      // const pizzaDetails: PizzaInfo = pizza.getPizzaDetails()
      pizza.printOrder()
    }
  })

Commander.parse(process.argv)

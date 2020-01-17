import Commander from 'commander'
import createPizza from './actions/createPizza'
import collectDeliveryAddress from './actions/collectDeliveryAddress'
import { PizzaSizes, PizzaBases } from './types/global'
import Pizza from './entities/Pizza/Pizza'
import DeliveryAddress from './entities/DeliveryAddress/DeliveryAddress'

Commander
  .version('1.0.0')
  .description('Create your own pizza')
  .command('create')
  .action(async () => {
    const pizzaAnswers = await createPizza(Pizza.availableToppings)

    if (pizzaAnswers) {
      const pizza: Pizza = new Pizza({
        base: pizzaAnswers['Base'] as PizzaBases,
        selectedToppings: Pizza.getSelectedToppings(pizzaAnswers['Toppings']),
        size: pizzaAnswers['Size'] as PizzaSizes
      })

      /* Make this section work */

      const collectedAddress = await collectDeliveryAddress()

      if (collectedAddress) {
        const delivery: DeliveryAddress = new DeliveryAddress({
          houseNumber: collectedAddress['HouseNumber'] as number,
          streetAddress: collectedAddress['StreetAddress'],
          postCode: collectedAddress['Postcode']
        })

        pizza.printOrder()
        delivery.printDeliveryAddress()
      }
    }
  })
  
Commander.parse(process.argv)

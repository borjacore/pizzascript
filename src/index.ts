import Commander from 'commander'
import createPizza from './actions/createPizza'
import collectDeliveryAddress from './actions/collectDeliveryAddress'
import { PizzaSizes, PizzaBases } from './types/global'
import Pizza from './entities/Pizza/Pizza'
import { toppings } from './constants'
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


      const collectAddress = await collectDeliveryAddress()
      const delivery: DeliveryAddress = new DeliveryAddress({
        houseNumber: collectAddress['HouseNumber'] as number,
        streetAddress: collectAddress['StreetAddress'],
        postCode: collectAddress['Postcode']
      })
      pizza.printOrder()
      delivery.printDeliveryAddress()
    }
  })
  
Commander.parse(process.argv)

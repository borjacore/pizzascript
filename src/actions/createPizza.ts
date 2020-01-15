import inquirer, {QuestionCollection, Answers} from 'inquirer'
import { PizzaBases, Topping, PizzaSizes } from '../types/global'
import getEnumValues from '../utils/getEnumValues/getEnumValues'

const createPizza = (toppings: Topping[]): Promise<Answers> => {
  const questions: QuestionCollection = [
    {
      type: 'list',
      name: 'Base',
      message: 'Which pizza base would you like?',
      choices: getEnumValues(PizzaBases)
    },
    {
      type: 'checkbox',
      name: 'Toppings',
      message: 'Which toppings would you like?',
      choices: toppings.map((topping) => topping.description)
    },
    {
      type: 'list',
      name: 'Size',
      message: 'Which size pizza would you like?',
      choices: getEnumValues(PizzaSizes)
    }
  ]

  return inquirer.prompt(questions)
}

export default createPizza;
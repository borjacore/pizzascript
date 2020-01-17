import inquirer, { QuestionCollection, Answers } from 'inquirer'

const collectDeliveryAddress = (): Promise<Answers> => {
  const questions: QuestionCollection = [
    {
      type: 'input',
      name: 'HouseNumber',
      message: 'What house number do you live at?'
    },
    {
      type: 'input',
      name: 'StreetAddress',
      message: 'What is your street address?'
    },
    {
      type: 'input',
      name: 'Postcode',
      message: 'What is your postcode?'
    }
  ]

  return inquirer.prompt(questions)
}

export default collectDeliveryAddress;
import Pizza from 'src/entities/Pizza/Pizza'

export type ToppingNames = "Cheese" | "Tomato" | "Ham" | "Bacon"

export interface Topping {
  id: string
  name: ToppingNames
  description: string
}

export enum PizzaSizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum PizzaBases {
  Thin = 'Thin',
  DeepPan = 'Deep Pan',
  StuffedCrust = 'Stuffed Crust'
}

export interface PizzaInfo {
  base: PizzaBases
  selectedToppings: Topping[]
  size: PizzaSizes
}

export interface DeliveryInfo {
  houseNumber: number
  streetAddress: string
  postCode: string
}
import Pizza from 'src/entities/Pizza'

export type ToppingNames = "Cheese" | "Tomato" | "Ham" | "Bacon"

export interface Topping {
  id: string
  name: ToppingNames
  description: string
}

export enum PizzaSizes {
  Small,
  Medium,
  Large
}

export enum PizzaBases {
  Thin,
  DeepPan = 'Deep Pan',
  StuffedCrust = 'Stuffed Crust'
}

export interface PizzaInfo {
  base: PizzaBases
  toppings: Topping[]
  size: PizzaSizes
}
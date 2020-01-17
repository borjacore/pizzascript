import DeliveryAddress from './DeliveryAddress'
import mockConsole from 'jest-mock-console'
import { DeliveryInfo } from 'src/types/global'

const exampleAddress: DeliveryInfo = {
  houseNumber: 123,
  streetAddress: 'Test Street',
  postCode: 'TE5T 0NE'
}

const createAddress = (): DeliveryAddress => {
  return new DeliveryAddress(exampleAddress)
}

describe('DeliveryAddress', () => {
  it('Should return an instance of DeliveryAddress class', () => {
    const address: DeliveryAddress = new DeliveryAddress()

    expect(address).toBeInstanceOf(DeliveryAddress)
  })

  it('Should contain the correct properties', () => {
    const address: DeliveryAddress = createAddress()
    expect(address).toMatchObject(exampleAddress)
  })

  describe('DeliveryAddress.printOrder', () => {
    it('Should print delivery address to console', () => {
      mockConsole()
      const address: DeliveryAddress = createAddress()

      address.printDeliveryAddress()

      expect(console.log).toHaveBeenNthCalledWith(2, 'Delivery address:')
      expect(console.log).toHaveBeenNthCalledWith(4, `House number: ${exampleAddress.houseNumber}`)
      expect(console.log).toHaveBeenNthCalledWith(5, `Street address: ${exampleAddress.streetAddress}`)
      expect(console.log).toHaveBeenNthCalledWith(6, `Postcode: ${exampleAddress.postCode}`)
    })
  })
})
import { DeliveryInfo } from 'src/types/global'

class DeliveryAddress {
  private houseNumber: number
  private streetAddress: string
  private postCode: string

  constructor(deliveryInfo?: DeliveryInfo) {
    if (deliveryInfo) {
      this.houseNumber = deliveryInfo.houseNumber
      this.streetAddress = deliveryInfo.streetAddress
      this.postCode = deliveryInfo.postCode
    }
  }

  public printDeliveryAddress() {
    console.log('')
    console.log('Delivery address:')
    console.log('-------------------------------')
    console.log(`House number: ${this.houseNumber}`)
    console.log(`Street address: ${this.streetAddress}`)
    console.log(`Postcode: ${this.postCode}`)
    console.log('')
  }
}

export default DeliveryAddress


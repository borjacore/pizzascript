# TypeScript - Beginner Workshop

## Getting setup
1. Clone the repo
2. Run `yarn` from the commmand line
3. Check project runs by executing `yarn execute`

## Exercises
1. Create DeliveryAddress enitity in: `./src/entities/DeliveryAddress/DeliveryAddress.ts`
2. Create DeliveryInfo interface in global.ts \
`src/types/global.ts`
3. Extend Pizza class to hold deliveryAddress with correct type
4. Update createPizza to collect delivery address via terminal
5. Add printDeliveryAddress to DeliveryAddress entity
6. Create tests for DeliveryAddress (use Pizza as reference):
`src/entities/DeliveryAddress/DeliveryAddress.test.ts`

## Additional Information
DeliveryClass should contain the following properties:

```
houseNumber of type number
streetAddress of type string
postCode of type string
```

DeliveryInfo should have properties:
```
houseNumber
streetAddress
postCode
```

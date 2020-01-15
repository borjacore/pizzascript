import getEnumValues from './getEnumValues'

describe('getEnumValues', () => {
  it('Should be of type function', () => {
    expect(getEnumValues).toBeInstanceOf(Function)
  })

  it('Should return an array of enum values', () => {
    enum TestEnum {
      Test,
      Enum
    }

    expect(getEnumValues(TestEnum)).toEqual(['Test', 'Enum'])
  })
})
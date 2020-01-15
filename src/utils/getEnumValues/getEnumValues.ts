const getEnumValues = (enumInstance: Object) => {
  return Object.values(enumInstance).filter(value => typeof value === 'string')
}

export default getEnumValues

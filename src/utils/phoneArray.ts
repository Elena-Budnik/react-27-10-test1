export type Phone = {
    id: number
    title: string
    description: string
    price: number
}
const PhoneArray: Phone[] = [
  {
      id: 1,
      title: 'iPhone 14 Pro',
      description: 'about iPhone 14',
      price: 1200,
  },
  {
      id: 2,
      title: 'iPhone 13 ',
      description: 'about iPhone 13',
      price: 1000,
  },
  {
      id: 3,
      title: 'iPhone 12 ',
      description: 'about iPhone 12',
      price: 900,
  },
]
export const getProductsObject = (array: Phone[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default PhoneArray
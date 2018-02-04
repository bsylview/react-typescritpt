const products:ProductItemData[]  = [
  {
    id: 1,
    title: 'Cory',
    description: 'House'
  },
  {
    id: 2,
    title: 'table',
    description: 'House'
  },
  {
    id: 3,
    title: 'sessel',
    description: 'Stuhl'
  }
];

export default class ProductsApi { 
    static getAllProducts(): ProductItemData[] {
        return products;
    };
}
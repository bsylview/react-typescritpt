/** ProductMVC model definitions **/

declare interface ProductItemData {
  id?: ProductItemId;
  title?: string;
  description?: string;
}

declare type ProductItemId = number;

declare type ProductStoreState = ProductItemData[];

export interface ICart {
  items: ICartItem[];
  value: number;
};

export interface ICartItem {
  productId: number;
  count: number;
};

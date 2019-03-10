export interface ICart {
  items: ICartItem[];
  count: number;
  value: number;
};

export interface ICartItem {
  productId: number;
  count: number;
};

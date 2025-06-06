// Auto-generated from src/modules/cart/dto/zod-schemas.ts
export type CartType = {
  id: string;
  userId: string;
  total: number;
  discountedTotal: number | null;
  promoCode: string | null;
  items: {
    id: string;
    quantity: number;
    productId: string;
    cartId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

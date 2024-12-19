export type Product = {
  product_id: string;
  product_type: string;
  product_brand: string;
  product_details: string;
  product_price: number;
  updated_at?: Date;
  created_at?: Date;
};
export type ProductFormValuesProps = {
  product_type: string;
  product_brand: string;
  product_details: string;
  product_price: number;
};

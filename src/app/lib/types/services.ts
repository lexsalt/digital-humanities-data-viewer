export type Service = {
  service_id: string;
  service_name: string;
  service_price: number;
  updated_at?: Date | null;
  created_at?: Date | null;
};
export type ServiceFormValuesProps = {
  service_name: string;
  service_price: number;
};

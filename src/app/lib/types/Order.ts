export type Order = {
  order_id: number;
  store_id: number;
  seller_id: number;
  order_type: string;
  product_id: number;
  service_id: number;
  quantity: number;
  total_amount: number;
  order_date: string;
};
export type OrderFormValuesProps = {
  store_id: number;
  seller_id: number;
  order_type: string;
  product_id: number;
  service_id: number;
  quantity: number;
  total_amount: number;
};

// {
//   order_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   store_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   seller_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   order_type: {
//     type: DataTypes.ENUM('Service', 'Product'),
//     allowNull: false,
//   },
//   product_id: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   service_id: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     defaultValue: 1,
//   },
//   total_amount: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   order_date: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// },

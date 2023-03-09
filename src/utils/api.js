const host = import.meta.env.VITE_BACKEND_URL;

// routes
const productsRoute = `${host}/api/client/products`;
const customersRoute = `${host}/api/client/customers`;
const transactionsRoute = `${host}/api/client/transactions`;
const geographyRoute = `${host}/api/client/geography`;
const salesRoute = `${host}/api/sales/totalStat`;
const adminsRoute = `${host}/api/management/admins`;

export {
  productsRoute,
  customersRoute,
  transactionsRoute,
  geographyRoute,
  salesRoute,
  adminsRoute,
};

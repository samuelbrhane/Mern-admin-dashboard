const host = import.meta.env.VITE_BACKEND_URL;

// routes
const productsRoute = `${host}/api/client/products`;
const customersRoute = `${host}/api/client/customers`;
const transactionsRoute = `${host}/api/client/transactions`;

export { productsRoute, customersRoute, transactionsRoute };

const host = import.meta.env.VITE_BACKEND_URL;

// routes
const productsRoute = `${host}/api/client/products`;
const customersRoute = `${host}/api/client/customers`;

export { productsRoute, customersRoute };

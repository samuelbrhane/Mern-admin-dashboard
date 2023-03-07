const host = import.meta.env.VITE_BACKEND_URL;

// get all products
const productsRoute = `${host}/api/client/products`;

export { productsRoute };

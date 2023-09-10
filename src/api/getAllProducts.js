import { fetchEndPoint } from './fetchEndPoint';

const allProductsEndPoint = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
    const products = await fetchEndPoint(allProductsEndPoint);
    return formatProducts(products);
}

const formatProducts = (products) => {
    if (!products) {
        return null;
    }

    return products.map((product) => {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.image,
        }
    });
}

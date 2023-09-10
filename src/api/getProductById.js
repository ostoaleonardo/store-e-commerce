import { fetchEndPoint } from './fetchEndPoint';

const productByIdEndPoint = 'https://fakestoreapi.com/products/';

export const getProductById = async (id) => {
    const url = productByIdEndPoint + id;
    const product = await fetchEndPoint(url);
    return formatProduct(product);
}

const formatProduct = (product) => {
    if (!product) {
        return null;
    }

    return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
    }
}

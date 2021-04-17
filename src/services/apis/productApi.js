const baseUrl = 'https://fakestoreapi.com';

export default {
  getProducts: () => `${baseUrl}/products`,
  getSingleProduct: id => `${baseUrl}/products/${id}`,
};

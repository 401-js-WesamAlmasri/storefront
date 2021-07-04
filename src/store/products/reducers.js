import { ACTIVE_CATEGORY } from '../categories';

let initialState = {
  products: [
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
    },
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
    },
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image: 'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CATEGORY:
      return {
        products: state.products.filter(
          (product) => product.category === action.payload
        ),
      };

    default:
      return state;
  }
};

export default productsReducer;

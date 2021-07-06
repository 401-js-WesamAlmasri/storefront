import { ACTIVE_CATEGORY } from '../categories';
import { DECREMENT_IN_STOCK, INCREMENT_IN_STOCK } from './actionTypes';

let initialState = {
  allProducts: [
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
      _id: 1,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 2,
    },
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
      _id: 3,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 4,
    },
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
      _id: 5,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 6,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 7,
    },
  ],
  products: [
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
      _id: 1,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 2,
    },
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
      _id: 3,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 4,
    },
    {
      name: '1TB USB',
      category: 'electronics',
      description: 'This is an usb storage',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 935,
      price: 100.99,
      _id: 5,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 6,
    },
    {
      name: 'Apple',
      category: 'food',
      description: 'food to eat all the time',
      image:
        'https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph',
      inStock: 15,
      price: 20.99,
      _id: 7,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CATEGORY:
      return {
        ...state,
        products: state.allProducts.filter(
          (product) => product.category === action.payload.name && product.inStock > 0
        ),
      };

    case DECREMENT_IN_STOCK:
      return {
        products: state.products.map((p) => {
          if (p._id === action.payload._id) {
            return {
              ...p,
              inStock: p.inStock - action.payload.count >= 0 ? p.inStock - action.payload.count : 0,
            };
          }
          return p;
        }),
        allProducts: state.allProducts.map((p) => {
          if (p._id === action.payload._id) {
            return {
              ...p,
              inStock: p.inStock - action.payload.count >= 0 ? p.inStock - action.payload.count : 0,
            };
          }
          return p;
        }),
      };

    case INCREMENT_IN_STOCK:
      return {
        products: state.products.map((p) => {
          if (p._id === action.payload._id) {
            return {
              ...p,
              inStock: p.inStock + action.payload.count,
            };
          }
          return p;
        }),
        allProducts: state.allProducts.map((p) => {
          if (p._id === action.payload._id) {
            return {
              ...p,
              inStock: p.inStock + action.payload.count,
            };
          }
          return p;
        }),
      };

    default:
      return state;
  }
};

export default productsReducer;

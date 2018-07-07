
import * as types from './actionTypes';

const initialState = {
  products: [],
  categories: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        categories: action.categories
      });
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        products: [
          {
            "productId": "prd01",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.001.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll2",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.002.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll3",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.003.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll4",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.004.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll5",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.005.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll6",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.006.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll7",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.007.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll8",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.008.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll9",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.009.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll10",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.010.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll11",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.011.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll12",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.012.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll13",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.013.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Avocado Roll14",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.014.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd01",
            "name": "Oolong Tea",
            "price": 1.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.001.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Green Tea",
            "price": 1.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.002.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Black Tea",
            "price": 1.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.003.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Coffee",
            "price": 2.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.004.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "California Sake",
            "price": 20.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.005.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Gekkeikan Sake",
            "price": 24.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.006.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Margarita",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.007.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Screwdriver",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.008.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Kirin Beer",
            "price": 8.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.009.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Yebisu Beer",
            "price": 7.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.010.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "White Russian",
            "price": 7.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.011.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Whiskey Sour",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.012.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Asahi Beer",
            "price": 8.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.013.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Sapporo Beer",
            "price": 8.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.014.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd01",
            "name": "Cucumber Salad",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Appetizer-item+images.001.png",
            "category": {
              "categoryId": 3,
              "name": "appetizers"
            }
          },
          {
            "productId": "prd01",
            "name": "Yaki Onigiri",
            "price": 7.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Appetizer-item+images.002.png",
            "category": {
              "categoryId": 3,
              "name": "appetizers"
            }
          }
        ]
      });
    }
    default:
      return state;
  }
}

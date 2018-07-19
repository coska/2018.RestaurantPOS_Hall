
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
            "productId": "prd02",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.002.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd03",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.003.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd04",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.004.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd05",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.005.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd06",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.006.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd07",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.007.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd08",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.008.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd09",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.009.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd10",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.010.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd11",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.011.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd12",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.012.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd13",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.013.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd14",
            "name": "Avocado Roll",
            "price": 9.99,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/main-item+images.014.png",
            "category": {
              "categoryId": 2,
              "name": "main"
            }
          },
          {
            "productId": "prd15",
            "name": "Oolong Tea",
            "price": 1.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.001.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd16",
            "name": "Green Tea",
            "price": 1.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.002.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd17",
            "name": "Black Tea",
            "price": 1.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.003.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd18",
            "name": "Coffee",
            "price": 2.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.004.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd19",
            "name": "California Sake",
            "price": 20.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.005.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd20",
            "name": "Gekkeikan Sake",
            "price": 24.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.006.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd21",
            "name": "Margarita",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.007.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd22",
            "name": "Screwdriver",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.008.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd23",
            "name": "Kirin Beer",
            "price": 8.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.009.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd24",
            "name": "Yebisu Beer",
            "price": 7.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.010.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd25",
            "name": "White Russian",
            "price": 7.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.011.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd26",
            "name": "Whiskey Sour",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.012.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd27",
            "name": "Asahi Beer",
            "price": 8.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.013.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd28",
            "name": "Sapporo Beer",
            "price": 8.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Drinks-item+images.014.png",
            "category": {
              "categoryId": 1,
              "name": "beverages"
            }
          },
          {
            "productId": "prd29",
            "name": "Cucumber Salad",
            "price": 6.00,
            "imageFile": "https://s3.ca-central-1.amazonaws.com/coska-restaurant-pos/200x200/Appetizer-item+images.001.png",
            "category": {
              "categoryId": 3,
              "name": "appetizers"
            }
          },
          {
            "productId": "prd30",
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

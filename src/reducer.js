export const initialState = {
  products: [],
  cart: [],
  cate: [],
  tit: [],
  searchItem: [],
};

// Selector

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "PRODUCTS_EMP":
      return {
        ...state,
        products: [],
      };

    case "PRODUCTS_Cat":
      return {
        ...state,
        cate: action.payload,
      };

    case "PRODUCTS_tit":
      return {
        ...state,
        tit: action.payload,
      };

    case "PRODUCTS_SEARCH":
      return {
        ...state,
        searchItem: action.payload,
      };

    case "PRODUCTS_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [{ ...action.payload }, ...state.cart],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((ca) => ca.id !== action.payload.id),
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export default reducer;

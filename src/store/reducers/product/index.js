import * as Actions from '../../actions/product';

const INITIAL_STATE = {
  data: [],
  selected: {},
  isLoading: false,
  error: false,
};

const product = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.ADD_A_PRODUCT:
    case Actions.UPDATE_A_PRODUCT:
    case Actions.REMOVE_A_PRODUCT:
    case Actions.GET_ALL_PRODUCTS:
    case Actions.PUBLISH_A_PRODUCT:
    case Actions.REPRODUCE_A_PRODUCT:
    case Actions.INCREASE_PRODUCT_STOCK:
    case Actions.DECREASE_PRODUCT_STOCK: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case Actions.ADD_A_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
        error: false,
      };
    }
    case Actions.REMOVE_A_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: state.data.filter(
          (item) => item.productURL !== action.payload.productURL
        ),
        isLoading: false,
        error: false,
      };
    }
    case Actions.UPDATE_A_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.productURL === action.payload.productURL
            ? { ...item, ...action.payload }
            : item
        ),
        isLoading: false,
        error: false,
      };
    }
    case Actions.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      };
    }
    case Actions.PUBLISH_A_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.productURL === action.payload.productURL
            ? { ...item, publish: !item.publish }
            : item
        ),
        isLoading: false,
        error: false,
      };
    }
    case Actions.INCREASE_PRODUCT_STOCK_SUCCESS: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.productURL === action.payload.productURL
            ? { ...item, stock: item.stock + 1 }
            : item
        ),
        isLoading: false,
        error: false,
      };
    }
    case Actions.DECREASE_PRODUCT_STOCK_SUCCESS: {
      return {
        ...state,
        data: state.data.map((item) =>
          item.productURL === action.payload.productURL
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
        isLoading: false,
        error: false,
      };
    }
    case Actions.REPRODUCE_A_PRODUCT_SUCCESS: {
      return {
        ...state,
        selected: action.payload,
        isLoading: false,
        error: false,
      };
    }

    case Actions.ADD_A_PRODUCT_ERROR:
    case Actions.UPDATE_A_PRODUCT_ERROR:
    case Actions.REMOVE_A_PRODUCT_ERROR:
    case Actions.GET_ALL_PRODUCTS_ERROR:
    case Actions.PUBLISH_A_PRODUCT_ERROR:
    case Actions.REPRODUCE_A_PRODUCT_ERROR:
    case Actions.INCREASE_PRODUCT_STOCK_ERROR:
    case Actions.DECREASE_PRODUCT_STOCK_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default product;

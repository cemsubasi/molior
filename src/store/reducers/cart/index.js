import * as Actions from '../../actions/cart';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: false,
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.ADD_TO_CART:
    case Actions.REMOVE_FROM_CART:
    case Actions.INCREASE_ITEM_COUNT:
    case Actions.DECREASE_ITEM_COUNT:
    case Actions.GET_ALL_CART_ITEMS: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case Actions.ADD_TO_CART_SUCCESS: {
      return {
        data: [...state.data, action.payload],
        isLoading: false,
        error: false,
      };
    }
    case Actions.REMOVE_FROM_CART_SUCCESS: {
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
        isLoading: false,
        error: false,
      };
    }
    case Actions.INCREASE_ITEM_COUNT_SUCCESS:
      return {
        data: [...state.data, action.payload],
        isLoading: false,
        error: false,
      };
    case Actions.DECREASE_ITEM_COUNT_SUCCESS: {
      return {
        data: state.data.filter(
          (item, index, arr) =>
            index !== arr.findIndex((each) => each.id === action.payload.id)
        ),
        isLoading: false,
        error: false,
      };
    }
    case Actions.GET_ALL_CART_ITEMS_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
        error: false,
      };
    }
    case Actions.ADD_TO_CART_ERROR:
    case Actions.REMOVE_FROM_CART_ERROR:
    case Actions.INCREASE_ITEM_COUNT_ERROR:
    case Actions.DECREASE_ITEM_COUNT_ERROR:
    case Actions.GET_ALL_CART_ITEMS_ERROR: {
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

export default cart;

import * as Actions from '../../actions/order';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: false,
};

const order = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.ADD_AN_ORDER:
    case Actions.GET_ALL_ORDERS: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case Actions.ADD_AN_ORDER_SUCCESS: {
      return {
        data: [...state.data, action.payload],
        isLoading: false,
        error: false,
      };
    }
    case Actions.GET_ALL_ORDERS_SUCCESS: {
      return {
        data: action.payload,
        isLoading: false,
        error: false,
      };
    }
    case Actions.ADD_AN_ORDER_ERROR:
    case Actions.GET_ALL_ORDERS_ERROR: {
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

export default order;

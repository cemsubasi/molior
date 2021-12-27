import * as Actions from '../../actions/auth';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isLoggedIn: false,
  error: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.LOGIN:
    case Actions.SIGNUP: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case Actions.LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isLoggedIn: true,
        error: false,
      };
    }
    case Actions.LOGIN_ERROR:
    case Actions.SIGNUP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.error,
      };
    }
    case Actions.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;

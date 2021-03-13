import { Data } from "../Data";

export const reducer = (state = Data, action) => {
	switch (action.type) {
		case "FETCH_POSTS":
			return {
				...state,
				postState: [...state.postState, ...action.payload],
			};
		case "ADD_POST":
			return {
				...state,
				postState: [...state.postState, action.payload],
			};
		case "DELETE_POST":
			return {
				...state,
				postState: state.postState.filter(
					(item) => item.productURL !== action.payload
				),
			};
		case "FEATURED_POST":
			return {
				...state,
				postState: state.postState.map((item) =>
					item.productURL === action.payload
						? { ...item, publish: !item.publish }
						: item
				),
			};
		case "HANDLE_STOCK":
			return {
				...state,
				postState: state.postState.map((item) =>
					item.productURL === action.payload.productURL
						? { ...item, stock: item.stock + action.payload.count }
						: item
				),
			};
		case "REPLACE_POST":
			return {
				...state,
				postState: state.postState.map((item) =>
					item.productURL === action.payload.productURL
						? { ...item, ...action.payload }
						: { ...item }
				),
			};
		case "EDIT_POST":
			return { ...state, editState: action.payload };
		case "SET_ADMIN":
			return { ...state, isAdmin: action.payload };
		case "SET_ERR":
			return { ...state, errState: action.payload };
		case "ADD2CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case "ADD2STORAGE":
			return {
				...state,
				cart: [...state.cart, ...action.payload],
			};
		case "DELETE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(
					(item, index, self) =>
						index !== self.findIndex((e) => e.id === action.payload.id)
				),
			};
		case "BAN_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case "SET_TEST":
			return {
				...state,
				testState: action.payload,
			};
		default:
			return state;
	}
};

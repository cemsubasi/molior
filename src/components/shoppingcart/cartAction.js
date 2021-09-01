export const deleteFromCart = (arg) => {
	return {type: 'DELETE_FROM_CART', payload: arg}
}
export const banFromCart = (arg) => {
	return {type: 'BAN_FROM_CART', payload: arg}
}

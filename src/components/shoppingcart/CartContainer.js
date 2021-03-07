import React from 'react'
import Cart from './Cart'
import HeaderComponent from '../../common/HeaderComponent'
import NewFooter from '../../common/NewFooter'

function CartContainer() {
	return(
			<HeaderComponent>
				<Cart />
				<NewFooter />
			</HeaderComponent>
	)
}

export default CartContainer

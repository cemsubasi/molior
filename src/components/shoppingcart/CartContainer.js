import React from 'react'
import Cart from './Cart'
import HeaderComponent from '../../common/HeaderComponent'
import NewFooter from '../../common/NewFooter'

function CartContainer() {
	return(
		<React.Fragment>
			<HeaderComponent>
				<Cart />
			</HeaderComponent>
				<NewFooter />
		</React.Fragment>
	)
}

export default CartContainer

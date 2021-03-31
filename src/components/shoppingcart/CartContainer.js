import React from "react";
import Cart from "./Cart";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function CartContainer() {
	return (
		<HeaderComponent>
			<Cart />
			<Footer />
		</HeaderComponent>
	);
}

export default CartContainer;

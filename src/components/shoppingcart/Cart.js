import React from "react";
import CartBody from "./CartBody";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function Cart() {
	return (
		<HeaderComponent>
			<CartBody />
			<Footer />
		</HeaderComponent>
	);
}

export default Cart;

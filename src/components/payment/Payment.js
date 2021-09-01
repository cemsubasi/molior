import React from "react";
import PaymentBody from "./PaymentBody";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function PaymentContainer() {
	return (
		<HeaderComponent>
			<PaymentBody />
			<Footer />
		</HeaderComponent>
	);
}

export default PaymentContainer;

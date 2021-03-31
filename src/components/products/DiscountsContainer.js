import React from "react";
import Discounts from "./Discounts";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function DiscountsContainer() {
	return (
		<HeaderComponent>
			<Discounts />
			<Footer />
		</HeaderComponent>
	);
}

export default DiscountsContainer;

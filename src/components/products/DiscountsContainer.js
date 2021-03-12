import React from "react";
import Discounts from "./Discounts";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function DiscountsContainer() {
	return (
		<HeaderComponent>
			<Discounts />
			<NewFooter />
		</HeaderComponent>
	);
}

export default DiscountsContainer;

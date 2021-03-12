import React from "react";
import Dresses from "./Dresses";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function ElbiseContainer() {
	return (
		<HeaderComponent>
			<Dresses />
			<NewFooter />
		</HeaderComponent>
	);
}

export default ElbiseContainer;

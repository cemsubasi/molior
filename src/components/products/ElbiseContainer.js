import React from "react";
import Elbise from "./Elbise";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function ElbiseContainer() {
	return (
		<HeaderComponent>
			<Elbise />
			<NewFooter />
		</HeaderComponent>
	);
}

export default ElbiseContainer;

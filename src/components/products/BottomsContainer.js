import React from "react";
import Bottoms from "./Bottoms";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function BottomsContainer() {
	return (
		<HeaderComponent>
			<Bottoms />
			<NewFooter />
		</HeaderComponent>
	);
}

export default BottomsContainer;

import React from "react";
import Tops from "./Tops";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function TopsContainer() {
	return (
		<HeaderComponent>
			<Tops />
			<NewFooter />
		</HeaderComponent>
	);
}

export default TopsContainer;

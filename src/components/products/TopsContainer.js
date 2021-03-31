import React from "react";
import Tops from "./Tops";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function TopsContainer() {
	return (
		<HeaderComponent>
			<Tops />
			<Footer />
		</HeaderComponent>
	);
}

export default TopsContainer;

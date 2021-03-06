import React from "react";
import Dresses from "./Dresses";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function ElbiseContainer() {
	return (
		<HeaderComponent>
			<Dresses />
			<Footer />
		</HeaderComponent>
	);
}

export default ElbiseContainer;

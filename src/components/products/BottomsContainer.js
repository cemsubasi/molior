import React from "react";
import Bottoms from "./Bottoms";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function BottomsContainer() {
	return (
		<HeaderComponent>
			<Bottoms />
			<Footer />
		</HeaderComponent>
	);
}

export default BottomsContainer;

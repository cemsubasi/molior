import React from "react";
import TopBody from "./TopBody";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function Top() {
	return (
		<HeaderComponent>
			<TopBody />
			<Footer />
		</HeaderComponent>
	);
}

export default Top;

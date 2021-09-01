import React from "react";
import BottomBody from "./BottomBody";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function Bottom() {
	return (
		<HeaderComponent>
			<BottomBody />
			<Footer />
		</HeaderComponent>
	);
}

export default Bottom;

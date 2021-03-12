import React from "react";
import AboutBody from "./AboutBody";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function AboutPageContainer() {
	return (
		<HeaderComponent>
			<AboutBody />
			<NewFooter />
		</HeaderComponent>
	);
}
export default AboutPageContainer;

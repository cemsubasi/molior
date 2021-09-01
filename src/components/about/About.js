import React from "react";
import AboutBody from "./AboutBody";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";

function AboutPageContainer() {
	return (
		<HeaderComponent>
			<AboutBody />
			<Footer />
		</HeaderComponent>
	);
}
export default AboutPageContainer;

import React from "react";
import HomeBody from "./HomeBody";
import HomePageLayout from "./HomePageLayout";
import Footer from "../../common/Footer";

function HomePageContainer() {
	return (
		<HomePageLayout>
			<HomeBody />
			<Footer />
		</HomePageLayout>
	);
}

export default HomePageContainer;

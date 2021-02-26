import React from "react";
import HomeBody from './HomeBody';
import HomePageLayout from '../../common/HomePageLayout';
import Footer from "../../common/Footer";

function Container(){
	return (
		<React.Fragment>
			<HomeBody />
			<Footer />
		</React.Fragment>
	)
}
function HomePageContainer() {
  return (
		<HomePageLayout Child={Container} />
  );
}

export default HomePageContainer;

import React from "react";
import HomeBody from './HomeBody';
import HomePageLayout from '../../common/HomePageLayout';
import NewFooter from "../../common/NewFooter";

function Container(){
	return (
		<React.Fragment>
			<HomeBody />
			<NewFooter />
		</React.Fragment>
	)
}
function HomePageContainer() {
  return (
		<HomePageLayout Child={Container}  />
  );
}

export default HomePageContainer;

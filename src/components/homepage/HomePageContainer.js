import React from "react";
import HomeBody from './HomeBody';
import HomePageLayout from './HomePageLayout';
import NewFooter from "../../common/NewFooter";

function HomePageContainer() {
  return (
		<HomePageLayout>
			<HomeBody />
			<NewFooter />
		</HomePageLayout>
  );
}

export default HomePageContainer;

import React from "react";
import AboutBody from "./AboutBody";
import HeaderComponent from '../../common/HeaderComponent';
import NewFooter from '../../common/NewFooter';

function AboutPageContainer() {
  return (
    <React.Fragment>
			<HeaderComponent>
			<AboutBody />
			<NewFooter />
			</HeaderComponent>
    </React.Fragment>
  );
}
export default AboutPageContainer;

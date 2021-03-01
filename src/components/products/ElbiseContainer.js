import React from 'react'
import Elbise from './Elbise'
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function ElbiseContainer() {
	return(
		<React.Fragment>
		<HeaderComponent>
      <Elbise />
		</HeaderComponent>
      <NewFooter />
		</React.Fragment>

	)
}

export default ElbiseContainer

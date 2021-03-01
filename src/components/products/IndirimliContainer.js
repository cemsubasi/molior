import React from 'react'
import Indimli from './Indimli'
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function IndirimliContainer() {
	return(
		<HeaderComponent>
      <Indimli />
      <NewFooter />
		</HeaderComponent>

	)
}

export default IndirimliContainer

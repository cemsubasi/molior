import React from "react";
import UstGiyim from "./UstGiyim";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function UstGiyimContainer() {
	return (
		<HeaderComponent>
			<UstGiyim />
			<NewFooter />
		</HeaderComponent>
	);
}

export default UstGiyimContainer;

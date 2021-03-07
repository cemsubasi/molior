import React from "react";
import AltGiyim from "./AltGiyim";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";

function AltGiyimContainer() {
	return (
		<HeaderComponent>
			<AltGiyim />
			<NewFooter />
		</HeaderComponent>
	);
}

export default AltGiyimContainer;

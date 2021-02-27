import React from "react";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";
import AlbumBody from "./AlbumBody";

function AlbumPageContainer() {
  return (
		<HeaderComponent >
			<AlbumBody />
			<NewFooter />
		</HeaderComponent>
  );
}
export default AlbumPageContainer;

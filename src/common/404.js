import React from "react";
import HeaderComponent from "./HeaderComponent";
import NewFooter from "./NewFooter";

const Page404 = () => {
	return (
		<React.Fragment>
			<HeaderComponent>
				<h1
					style={{
						textAlign: "center",
						height: "70vh",
						width: "50vw",
						margin: "auto",
					}}
				>
					404 Page Not Found!
				</h1>
			</HeaderComponent>
			<NewFooter />
		</React.Fragment>
	);
};

export default Page404;

import React from "react";
import { Header, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import CardComponent from "./CardComponent";

function Elbise(props) {
	return (
		<React.Fragment>
			<Header as="h3" style={{ marginBottom: "35px", textAlign: "center" }}>
				Elbise kategorisi için bulunan sonuçlar
			</Header>
			<Container style={{ marginBottom: "50px " }}>
				<Grid>
					<CardComponent {...props} category="elbise" />
				</Grid>
			</Container>
		</React.Fragment>
	);
}
const mapStateToProps = (state) => {
	return {
		state: state.postState,
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(Elbise);

import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import CardComponent from "../../common/CardComponent";

function DressBody(props) {
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

DressBody.propTypes = {
	state: PropTypes.array,
	cart: PropTypes.array,
};
const mapStateToProps = (state) => {
	return {
		state: state.postState,
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(DressBody);

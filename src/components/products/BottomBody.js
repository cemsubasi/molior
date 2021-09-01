import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import CardComponent from "../../common/CardComponent";

function BottomBody(props) {
	return (
		<React.Fragment>
			<Header style={{ marginBottom: "35px", textAlign: "center" }}>
				Alt giyim kategorisi için bulunan sonuçlar
			</Header>
			<Container style={{ marginBottom: "50px " }}>
				<Grid>
					<CardComponent {...props} category="alt-giyim" />
				</Grid>
			</Container>
		</React.Fragment>
	);
}

BottomBody.propTypes = {
	state: PropTypes.array,
};
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(BottomBody);

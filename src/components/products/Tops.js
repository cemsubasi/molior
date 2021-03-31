import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import CardComponent from "../../common/CardComponent";

function UstGiyim(props) {
	return (
		<React.Fragment>
			<Header style={{ marginBottom: "35px", textAlign: "center" }}>
				Üst giyim kategorisi için bulunan sonuçlar
			</Header>
			<Container style={{ marginBottom: "50px " }}>
				<Grid>
					<CardComponent {...props} category="ust-giyim" />
				</Grid>
			</Container>
		</React.Fragment>
	);
}
UstGiyim.propTypes = {
	state: PropTypes.array,
};
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(UstGiyim);

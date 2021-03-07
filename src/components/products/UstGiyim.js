import React from "react";
import { Header, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import CardComponent from "./CardComponent";

function UstGiyim(props) {
	return (
		<React.Fragment>
			<Header style={{ marginBottom: "25px", textAlign: "center" }}>
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
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(UstGiyim);

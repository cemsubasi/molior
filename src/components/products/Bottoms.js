import React from "react";
import { Header, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import CardComponent from "../../common/CardComponent";

function Bottoms(props) {
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
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(Bottoms);

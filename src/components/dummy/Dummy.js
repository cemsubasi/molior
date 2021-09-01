import React from "react";
import { connect } from "react-redux";
import HeaderComponent from "../../common/HeaderComponent";
import Footer from "../../common/Footer";
import DummyBody from "./DummyBody";

const Dummy = (props) => {
	return (
		<HeaderComponent>
			<DummyBody />
			<Footer />
		</HeaderComponent>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(Dummy);

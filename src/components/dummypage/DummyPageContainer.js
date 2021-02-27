import React from "react";
import { connect } from "react-redux";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";
import DummyBody from "./DummyBody";

const DummyPageContainer = (props) => {
  return (
		<HeaderComponent>
      <DummyBody />
      <NewFooter />
		</HeaderComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.postState,
  };
};

export default connect(mapStateToProps)(DummyPageContainer);

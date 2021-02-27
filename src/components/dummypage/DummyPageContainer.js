import React from "react";
import { connect } from "react-redux";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";
import DummyWriteComment from "./DummyWriteComment";
import DummyShowComments from "./DummyShowComments";
import DummyBody from "./DummyBody";

const DummyPageContainer = (props) => {
  return (
		<HeaderComponent>
      <DummyBody />
      <DummyShowComments />
      <div className="pt-5">
        <h3 className="text-center">Add a comment</h3>
        <DummyWriteComment />
      </div>
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

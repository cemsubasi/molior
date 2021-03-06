import SuperList from "./SuperList";
import SuperForm from "./SuperForm";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";
import { connect } from "react-redux";

function SuperPageContainer(props) {
  return (
		<HeaderComponent>
			<SuperList />
			<SuperForm />
			<NewFooter />
		</HeaderComponent>
  );
}
const mapStateToProps = (state) => {
  return {
    superInputState: state.superInputState,
  };
};
export default connect(mapStateToProps)(SuperPageContainer);

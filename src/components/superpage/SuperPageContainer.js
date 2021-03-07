import SuperList from "./SuperList";
import SuperForm from "./SuperForm";
// import HeaderComponent from "../../common/HeaderComponent";
import SuperHeader from "./SuperHeader";
import NewFooter from "../../common/NewFooter";
import { connect } from "react-redux";

function SuperPageContainer(props) {
	return (
		<SuperHeader>
			<SuperList />
			<SuperForm />
			<NewFooter />
		</SuperHeader>
	);
}
const mapStateToProps = (state) => {
	return {
		superInputState: state.superInputState,
	};
};
export default connect(mapStateToProps)(SuperPageContainer);

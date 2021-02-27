import SuperBanner from "./SuperBanner";
import SuperList from "./SuperList";
import SuperForm from "./SuperForm";
import SuperPhoto from "./SuperPhoto";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";
import HomeModal from "../homepage/HomeModal";
import { connect } from "react-redux";

function SuperPageContainer(props) {
  return (
		<HeaderComponent>
      <div className="superuser">
        <HomeModal />
        <SuperBanner />
        {props.superInputState === "post" ? (
          <div>
            <SuperList />
            <SuperForm />
          </div>
        ) : (
          <SuperPhoto />
        )}
        <NewFooter />
      </div>
		</HeaderComponent>
  );
}
const mapStateToProps = (state) => {
  return {
    superInputState: state.superInputState,
  };
};
export default connect(mapStateToProps)(SuperPageContainer);

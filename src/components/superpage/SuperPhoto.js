import { connect } from "react-redux";
const SuperPhoto = () => {

  return (
    <div className="App">
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.photoState,
  };
};

export default connect(mapStateToProps)(SuperPhoto);

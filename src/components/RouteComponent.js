import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SuperPageContainer from "./superpage/SuperPageContainer";
import HomePageContainer from "./homepage/HomePageContainer";
import DummyPageContainer from "./dummypage/DummyPageContainer";
import LoginPageContainer from "./loginpage/LoginPageContainer";
import AboutPageContainer from "./aboutpage/AboutPageContainer";
import DressesContainer from "./products/DressesContainer";
import BottomsContainer from "./products/BottomsContainer";
import TopsContainer from "./products/TopsContainer";
import DiscountsContainer from "./products/DiscountsContainer";
import CartContainer from "./shoppingcart/CartContainer";
import SuperTest from "./superpage/SuperTest";
import Page404 from "../common/404";
import { url3 } from "../Data";

const RouteComponent = (props) => {
	return (
		<Router>
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={HomePageContainer} />
					<Route path="/about" component={AboutPageContainer} />
					<Route exact path="/elbise" component={DressesContainer} />
					<Route exact path="/alt-giyim" component={BottomsContainer} />
					<Route exact path="/ust-giyim" component={TopsContainer} />
					<Route path="/indirimli-urunler" component={DiscountsContainer} />
					<Route path="/sepet" component={CartContainer} />
					<Route path="/supertest" component={SuperTest} />
					<Route
						path={url3}
						render={() =>
							props.isAdmin === true ? (
								<SuperPageContainer />
							) : (
								<LoginPageContainer />
							)
						}
					/>
					<Route path="/:slug" component={DummyPageContainer} />
					<Route path="*" component={Page404} />
				</Switch>
			</React.Fragment>
		</Router>
	);
};
const mapStateToProps = (state) => {
	return {
		isAdmin: state.isAdmin,
	};
};

export default connect(mapStateToProps)(RouteComponent);

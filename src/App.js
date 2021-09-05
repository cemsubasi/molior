import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Root from "./components/Root";
import { fetchPosts } from "./components/home/homeAction";
import { add2storage } from "./components/dummy/dummyAction";

import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import "./css/blog.css";
import "./css/signin.css";

const Client = (props) => {
	const ref = useRef(props);
	useEffect(() => {
		ref.current.fetchPosts();
		if (JSON.parse(localStorage.getItem("cart")))
			ref.current.add2storage(JSON.parse(localStorage.getItem("cart")));
	}, []);
	useEffect(() => localStorage.setItem("cart", JSON.stringify(props.cart)), [
		props.cart,
	]);

	return <Root />;
};

Client.propTypes = {
	postState: PropTypes.array,
	cart: PropTypes.array,
	fetchPosts: PropTypes.func,
	add2storage: PropTypes.func,
};

const mapStateToProps = (state) => {
	return {
		postState: state.postState,
		cart: state.cart,
	};
};
export default connect(mapStateToProps, { fetchPosts, add2storage })(Client);

import { useEffect } from "react";
import { connect } from "react-redux";
import RouteComponent from "./components/RouteComponent";
import { fetchPosts } from "./components/homepage/HomeAction";
import {add2storage} from './components/dummypage/DummyAction'

import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import "./css/blog.css";
import "./css/signin.css";

const Client = (props) => {

	console.log('props.postState', props.postState)
  useEffect(
    () => {
      props.fetchPosts();
			if(JSON.parse(localStorage.getItem('cart')))
				props.add2storage(JSON.parse(localStorage.getItem('cart')))
    },
    // eslint-disable-next-line
    []
  );
	useEffect(()=> 
		localStorage.setItem('cart', JSON.stringify(props.cart))
	,[props.cart])


  return <RouteComponent />;
};

const mapStateToProps = (state) => {
	return{
		postState: state.postState,
		cart: state.cart,
	}
}
export default connect(mapStateToProps, { fetchPosts, add2storage })(Client);

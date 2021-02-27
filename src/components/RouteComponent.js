import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SuperPageContainer from "./superpage/SuperPageContainer";
import HomePageContainer from "./homepage/HomePageContainer";
import DummyPageContainer from "./dummypage/DummyPageContainer";
import LoginPageContainer from "./loginpage/LoginPageContainer";
import AlbumPageContainer from "./albumpage/AlbumPageContainer";
import AboutPageContainer from "./aboutpage/AboutPageContainer";
import PostsPageContainer from "./postspage/PostsPageContainer";
import Elbise from './products/Elbise';
import Page404 from '../common/404';
import { url3 } from "../Data";

const RouteComponent = (props) => {
  return (
    <Router>
			<React.Fragment>
        <Switch>
          <Route exact path="/" children={<HomePageContainer />} />
          <Route path="/posts" children={<PostsPageContainer />} />
          <Route path="/album" children={<AlbumPageContainer />} />
          <Route path="/about" children={<AboutPageContainer />} />
          <Route path="/elbise" children={<Elbise />} />
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
          <Route path="/slug/:slug" children={<DummyPageContainer />} />
          <Route path="*" children={<Page404 />} />
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

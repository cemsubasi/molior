import { useEffect } from "react";
import { connect } from "react-redux";
import RouteComponent from "./components/RouteComponent";
import { fetchPosts } from "./components/homepage/HomeAction";
import { fetchPhotos } from "./components/albumpage/AlbumAction";

import "semantic-ui-css/semantic.min.css";
import "./css/App.css";
import "./css/blog.css";
import "./css/signin.css";

const Client = (props) => {
  useEffect(
    () => {
      props.fetchPosts();
    },
    // eslint-disable-next-line
    []
  );

  return <RouteComponent />;
};

export default connect(null, { fetchPosts, fetchPhotos })(Client);

import React from "react";
import HeaderComponent from "../../common/HeaderComponent";
import NewFooter from "../../common/NewFooter";
import PostsBody from "./PostsBody";

function PostsPageContainer() {
  return (
		<HeaderComponent>
      <PostsBody />
      <NewFooter />
		</HeaderComponent>
  );
}
export default PostsPageContainer;

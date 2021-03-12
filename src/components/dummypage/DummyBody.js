import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Reveal, Image, Grid } from "semantic-ui-react";
import { add2cart } from "./DummyAction";
import DummyItemProperties from "./DummyItemProperties";

const DummyBody = (props) => {
	let { pathname } = useLocation();
	const [dummyState, setDummyState] = useState({});
	const [message, setMessage] = useState(false);

	return props.state
		.filter((item) => "/" + item.productURL === pathname)
		.map((item) => (
			<Grid
				key={item.productURL}
				container
				stackable
				verticalAlign="middle"
				style={{ margin: "20px 0px 110px" }}
			>
				<Grid.Column width={10}>
					<Reveal animated="move right">
						<Reveal.Content visible>
							<Image src={item.data_url} size="medium" />
						</Reveal.Content>
						<Reveal.Content hidden>
							<Image
								src="https://cdn.dsmcdn.com/mnresize/415/622/ty76/product/media/images/20210225/14/66899714/142499060/5/5_org_zoom.jpg"
								size="medium"
							/>
						</Reveal.Content>
					</Reveal>
				</Grid.Column>
				<Grid.Column
					floated="right"
					width={6}
					style={{ marginLeft: "0px", borderLeft: "1px solid rgba(0,0,0,0.1)" }}
				>
					<DummyItemProperties
						props={props}
						dummyState={dummyState}
						message={message}
						item={item}
						setDummyState={setDummyState}
						setMessage={setMessage}
					/>
				</Grid.Column>
			</Grid>
		));
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		cart: state.cart,
	};
};

export default connect(mapStateToProps, { add2cart })(DummyBody);

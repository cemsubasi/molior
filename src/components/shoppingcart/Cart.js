import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Button, List } from "semantic-ui-react";
import { add2cart } from "../dummypage/DummyAction";
import { deleteFromCart, banFromCart } from "./CartAction";
import { axiosCall } from "../../data";
import CartPlaceholder from "./CartPlaceholder";
import CartBanner from "./CartBanner";
import CartItem from "./CartItem";
import CartBill from "./CartBill";

function CartBody({ props }) {
	const [state, setState] = useState([]);

	useEffect(
		() =>
			setState(
				props.state.filter(
					(item, index, self) =>
						index === self.findIndex((e) => e.id === item.id)
				)
			),
		[props.state]
	);

	function click(arg) {
		return axiosCall("post", "/offer", arg)
			.then((res) => console.log("answer", res))
			.catch((err) => console.log("Baglanti Hatasi: Cart", err));
	}

	return (
		<>
			<CartBanner select="cart" />
			<Grid columns={2} stackable textAlign="center">
				<Grid.Row>
					<Grid.Column width={12} style={{ margin: "auto" }}>
						<List relaxed="very" style={{ margin: "10px" }}>
							{state.map &&
								state.map((item, index) => (
									<CartItem props={props} item={item} key={index} />
								))}
						</List>
					</Grid.Column>
					<Grid.Column width={4} style={{ textAlign: "center" }}>
						<CartBill props={props} />
						<Button
							primary
							onClick={() => click(props.state)}
							style={{ margin: "1em 0", textAlign: "center" }}
						>
							Sepeti Onayla
						</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
}

CartBody.propTypes = {
	props: PropTypes.object,
};

function Cart(props) {
	return (
		<Container style={{ margin: "3em 0 8em 0" }}>
			{props.state.length > 0 ? (
				<CartBody props={props} />
			) : (
				<>
					<CartBanner select="cart" />
					<CartPlaceholder />
				</>
			)}
		</Container>
	);
}

Cart.propTypes = {
	add2cart: PropTypes.func,
	deleteFromCart: PropTypes.func,
	banFromCart: PropTypes.func,
};
const mapStateToProps = (state) => {
	return {
		state: state.cart,
	};
};

export default connect(mapStateToProps, {
	add2cart,
	deleteFromCart,
	banFromCart,
})(Cart);

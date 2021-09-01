import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Container, Button, List } from "semantic-ui-react";
import { add2cart } from "../dummy/dummyAction";
import { deleteFromCart, banFromCart } from "./cartAction";
import { Link } from "react-router-dom";
import CartPlaceholder from "./CartPlaceholder";
import CartBanner from "./CartBanner";
import CartItem from "./CartItem";
import CartBill from "./CartBill";

function CartUI({ props }) {
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
							as={Link}
							to="/payment"
							primary
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

CartUI.propTypes = {
	props: PropTypes.object,
};

function CartBody(props) {
	return (
		<Container style={{ margin: "3em 0 8em 0" }}>
			{props.state.length > 0 ? (
				<CartUI props={props} />
			) : (
				<>
					<CartBanner select="cart" />
					<CartPlaceholder />
				</>
			)}
		</Container>
	);
}

CartBody.propTypes = {
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
})(CartBody);

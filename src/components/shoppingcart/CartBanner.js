import React from "react";
import PropTypes from "prop-types";
import { Step, Grid, Icon } from "semantic-ui-react";

function CartBanner({ select }) {
	return (
		<Grid columns={2} stackable textAlign="center" style={{ margin: "1em 0" }}>
			<Grid.Row style={{ marginBottom: "1em" }}>
				<Step.Group widths={3} style={{ padding: "0px" }}>
					<Step active={select === "cart"} disabled={select !== "cart"}>
						<Icon name="shopping cart" />
						<Step.Content>
							<Step.Title>Sepet</Step.Title>
						</Step.Content>
					</Step>
					<Step active={select === "card"} disabled={select !== "card"}>
						<Icon name="credit card" />
						<Step.Content>
							<Step.Title>Ödeme</Step.Title>
						</Step.Content>
					</Step>
					<Step active={select === "confirm"} disabled={select !== "confirm"}>
						<Icon name="info" />
						<Step.Content>
							<Step.Title>Sipariş Onay</Step.Title>
						</Step.Content>
					</Step>
				</Step.Group>
			</Grid.Row>
		</Grid>
	);
}

CartBanner.propTypes = {
	select: PropTypes.string,
};

export default CartBanner;

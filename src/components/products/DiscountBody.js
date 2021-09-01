import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header, Card, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import PlaceHolder from "../../common/PlaceHolder";
import CardDiscountLabel from "../../common/CardDiscountLabel";
import CardDescription from "../../common/CardDescription";
import CardContent from "../../common/CardContent";

function CardComponent(props) {
	const [state, setState] = useState([]);
	useEffect(() => {
		if (props.state)
			setState(
				props.state
					.filter((item) => item.discount > 0 && item.stock > 0 && item.publish)
					.sort((a, b) => b.discount - a.discount)
					.filter(
						(item, index, self) =>
							index ===
							self.findIndex((e) => e.productHeader === item.productHeader)
					)
			);
	}, [props.state]);

	return state.map && state.length > 0 ? (
		state.map((item) => (
			<Grid.Column key={item.productURL} mobile={16} tablet={8} computer={4}>
				<Card as={Link} to={item.productURL} style={{ margin: "auto" }}>
					<CardDiscountLabel props={item} />
					<Card.Content>
						<Card.Header>{item.productHeader}</Card.Header>
						<Card.Meta>{item.productBody}</Card.Meta>
						<Card.Description>
							<CardDescription props={item} />
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<CardContent props={item} />
					</Card.Content>
				</Card>
			</Grid.Column>
		))
	) : (
		<PlaceHolder />
	);
}

CardComponent.propTypes = {
	props: PropTypes.array,
};

function DiscountBody(props) {
	return (
		<React.Fragment>
			<Header style={{ marginBottom: "35px", textAlign: "center" }}>
				İndirim kategorisi için bulunan sonuçlar
			</Header>
			<Container style={{ marginBottom: "50px " }}>
				<Grid>
					<CardComponent {...props} />
				</Grid>
			</Container>
		</React.Fragment>
	);
}
DiscountBody.propTypes = {
	state: PropTypes.array,
};
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps)(DiscountBody);

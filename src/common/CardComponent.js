import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import CardContent from "./CardContent";
import PlaceHolder from "./PlaceHolder";
import CardDescription from "./CardDescription";
import CardDiscountLabel from "./CardDiscountLabel";

function CardComponent(props) {
	const [state, setState] = useState([]);
	useEffect(() => {
		if (props.state)
			setState(
				props.state
					.filter(
						(item) =>
							item.category === props.category && item.stock > 0 && item.publish
					)
					.sort((a, b) => b.discount - a.discount)
					.filter(
						(item, index, self) =>
							index ===
							self.findIndex((e) => e.productHeader === item.productHeader)
					)
			);
	}, [props.state, props.category]);

	return state.map &&
		state.filter((item) => item.category === props.category && item.publish)
			.length > 0 ? (
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

export default CardComponent;

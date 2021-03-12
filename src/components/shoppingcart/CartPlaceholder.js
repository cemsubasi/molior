import React from "react";
import { useHistory } from "react-router-dom";
import { Header, Icon, Container, Segment, Button } from "semantic-ui-react";

const CartPlaceholder = () => {
	const history = useHistory();
	return (
		<Container text>
			<Segment placeholder style={{ margin: "1em 0 20em 0" }}>
				<Header icon>
					<Icon name="cart arrow down" />
					Sepet Boş
				</Header>
				<Button primary onClick={history.goBack}>
					Alışverişe Devam Et
				</Button>
			</Segment>
		</Container>
	);
};

export default CartPlaceholder;

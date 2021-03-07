import React from "react";
import { Segment, Header, Icon, Container } from "semantic-ui-react";

const PlaceHolder = () => {
	return (
		<Container text>
			<Segment
				placeholder
				style={{ margin: "1em 0 20em 0", verticalAlign: "bottom" }}
			>
				<Header icon>
					<Icon style={{ marginBottom: "1em" }} name="undo" />
					Üzgünüm bu bölümde hiç ürün yok. Başka kategorilere bakmanızı
					öneririz.
				</Header>
			</Segment>
		</Container>
	);
};

export default PlaceHolder;

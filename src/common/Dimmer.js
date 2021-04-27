import React from "react";
import { Dimmer, Header, Icon } from "semantic-ui-react";

export default function DimmerTemplate({ open }) {
	return (
		<Dimmer active={open} page>
			<Header as="h2" icon inverted>
				<Icon name="heart" />
				İşlem Başarılı!
				<Header.Subheader>Siparişiniz başarıyla alınmıştır.</Header.Subheader>
			</Header>
		</Dimmer>
	);
}

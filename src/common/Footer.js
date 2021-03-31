import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Icon,
	Grid,
	Header,
	List,
	Segment,
} from "semantic-ui-react";

const Footer = () => {
	return (
		<Segment inverted vertical style={{ padding: "5em 0em" }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Hakkımızda" />
							<List link inverted>
								<List.Item as={Link} to="/about">
									Biz kimiz?
								</List.Item>
								<List.Item as={Link} to="/">
									Bize Ulaşın
								</List.Item>
								<List.Item as={Link} to="/">
									Ödeme & İade
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Ürün Kategorisi" />
							<List link inverted>
								<List.Item as={Link} to="/elbise">
									Elbise
								</List.Item>
								<List.Item as={Link} to="/alt-giyim">
									Alt Giyim
								</List.Item>
								<List.Item as={Link} to="/ust-giyim">
									Üst Giyim
								</List.Item>
								<List.Item as={Link} to="/indirimli-urunler">
									İndirimli Ürünler
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header as="h4" inverted>
								Molior Boutique
							</Header>
							<Icon size="large" name="instagram" content="instagram" />
							<a href="https://instagram.com/moliorbutik" target="_alt">
								Bizi Takip Edin
							</a>
							<p style={{ marginTop: "25px" }}>
								moliorbutik.com Tüm Hakları Saklıdır.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	);
};

export default Footer;

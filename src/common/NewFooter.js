import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const NewBanner = () => {
	return (
		<Segment inverted vertical style={{ padding: "5em 0em" }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="About" />
							<List link inverted>
								<List.Item as={Link} to="/">
									Sitemap
								</List.Item>
								<List.Item as={Link} to="/">
									Contact Us
								</List.Item>
								<List.Item as={Link} to="/">
									Religious Ceremonies
								</List.Item>
								<List.Item as={Link} to="/">
									Gazebo Plans
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Services" />
							<List link inverted>
								<List.Item as={Link} to="/">
									Banana Pre-Order
								</List.Item>
								<List.Item as={Link} to="/">
									DNA FAQ
								</List.Item>
								<List.Item as={Link} to="/">
									How To Access
								</List.Item>
								<List.Item as={Link} to="/">
									Favorite X-Men
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header as="h4" inverted>
								Footer Header
							</Header>
							<p>
								Extra space for a call to action inside the footer that could
								help re-engage users.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	);
};

export default NewBanner;

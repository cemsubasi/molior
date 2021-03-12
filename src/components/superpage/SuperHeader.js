import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Icon,
	Menu,
	Segment,
	Sidebar,
	Visibility,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
});

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({ children }) => {
	const [state, setState] = useState({});

	const hideFixedMenu = () => setState({ fixed: false });
	const showFixedMenu = () => setState({ fixed: true });

	const { fixed } = state;

	return (
		<Media greaterThan="mobile">
			<Visibility
				once={false}
				onBottomPassed={showFixedMenu}
				onBottomPassedReverse={hideFixedMenu}
				style={{ marginBottom: "70px" }}
			>
				<Menu
					className="homeMenu"
					fixed={"top"}
					pointing={!fixed}
					secondary={!fixed}
					size="large"
				>
					<Container>
						<Menu.Item as={Link} to="/" active>
							Ana Sayfa
						</Menu.Item>
						<Menu.Item as={Link} to="/neva">
							Neva
						</Menu.Item>
						<Menu.Item as={Link} to="/orders">
							Siparişler
						</Menu.Item>
					</Container>
				</Menu>
			</Visibility>
			{children}
		</Media>
	);
};

DesktopContainer.propTypes = {
	children: PropTypes.node,
};

const MobileContainer = ({ children }) => {
	const [state, setState] = useState({});

	const handleSidebarHide = () => setState({ sidebarOpened: false });

	const handleToggle = () => setState({ sidebarOpened: true });

	const { sidebarOpened } = state;

	return (
		<Media as={Sidebar.Pushable} at="mobile">
			<Sidebar.Pushable>
				<Sidebar
					as={Menu}
					animation="overlay"
					inverted
					onHide={handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as={Link} to="/" active>
						Ana Sayfa
					</Menu.Item>
					<Menu.Item as={Link} to="/neva">
						Neva
					</Menu.Item>
					<Menu.Item as={Link} to="/orders">
						Siparişler
					</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign="center"
						style={{ minHeight: 90, padding: "1em 0em" }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size="large">
								<Menu.Item onClick={handleToggle}>
									<Icon name="sidebar" />
								</Menu.Item>
							</Menu>
						</Container>
					</Segment>
					{children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</Media>
	);
};

MobileContainer.propTypes = {
	children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
	/* Heads up!
	 * For large applications it may not be best option to put all page into these containers at
	 * they will be rendered twice for SSR.
	 */
	<MediaContextProvider>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</MediaContextProvider>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};

const HeaderComponent = ({ children }) => (
	<ResponsiveContainer>{children}</ResponsiveContainer>
);

export default HeaderComponent;

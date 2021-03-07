import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	Button,
	Container,
	Icon,
	Menu,
	Segment,
	Sidebar,
	Visibility,
	Label,
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
const DesktopContainer = ({ children, props }) => {
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
						<Menu.Item as={Link} to="/elbise">
							Elbise
						</Menu.Item>
						<Menu.Item as={Link} to="/ust-giyim">
							Üst Giyim
						</Menu.Item>
						<Menu.Item as={Link} to="/alt-giyim">
							Alt Giyim
						</Menu.Item>
						<Menu.Item as={Link} to="/indirimli-urunler">
							İndirimli Ürünler
						</Menu.Item>
						<Menu.Item position="right">
							<Button
								as={Link}
								to="/"
								icon="search"
								style={{
									marginLeft: "0.5em",
									paddingLeft: "18px",
									paddingRight: "18px",
								}}
							></Button>
							<Button
								as={Link}
								to="/sepet"
								primary
								style={{
									marginLeft: "0.5em",
									paddingLeft: "20px",
									paddingRight: "20px",
								}}
							>
								<Icon style={{ margin: "0px" }} name="shopping cart" />
								{props.state && props.state.length > 0 ? (
									<Label
										size="small"
										circular
										color="red"
										style={{ top: "-4px" }}
										floating
									>
										{props.state && props.state.length < 1
											? 0
											: props.state.length}
									</Label>
								) : null}
							</Button>
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
	props: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

const MobileContainer = ({ children, props }) => {
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
					<Menu.Item as={Link} to="/elbise">
						Elbise
					</Menu.Item>
					<Menu.Item as={Link} to="/ust-giyim">
						Üst Giyim
					</Menu.Item>
					<Menu.Item as={Link} to="/alt-giyim">
						Alt Giyim
					</Menu.Item>
					<Menu.Item as={Link} to="/indirimli-urunler">
						İndirimli Ürünler
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
								<Menu.Item position="right">
									<Button
										as={Link}
										to="/"
										icon="search"
										inverted
										style={{
											marginLeft: "0.5em",
											paddingLeft: "18px",
											paddingRight: "18px",
										}}
									></Button>
									<Button
										as={Link}
										to="/sepet"
										inverted
										style={{
											marginLeft: "0.5em",
											paddingLeft: "20px",
											paddingRight: "20px",
										}}
									>
										<Icon style={{ margin: "0px" }} name="shopping cart" />
										{props.state && props.state.length > 0 ? (
											<Label
												size="small"
												circular
												color="red"
												style={{ top: "-4px" }}
												floating
											>
												{props.state && props.state.length < 1
													? 0
													: props.state.length}
											</Label>
										) : null}
									</Button>
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
	props: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

const ResponsiveContainer = ({ children, props }) => (
	/* Heads up!
	 * For large applications it may not be best option to put all page into these containers at
	 * they will be rendered twice for SSR.
	 */
	<MediaContextProvider>
		<DesktopContainer props={props}>{children}</DesktopContainer>
		<MobileContainer props={props}>{children}</MobileContainer>
	</MediaContextProvider>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
	props: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

const HeaderComponent = (props) => (
	<ResponsiveContainer props={props}>{props.children}</ResponsiveContainer>
);
const mapStateToProps = (state) => {
	return {
		state: state.cart,
	};
};

export default connect(mapStateToProps)(HeaderComponent);

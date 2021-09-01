import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	addPost,
	deletePost,
	featuredPost,
	editPost,
	handleStock,
	setTest,
} from "./superAction";
import {
	Button,
	Icon,
	Header,
	Menu,
	Dropdown,
	Image,
	Table,
	Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const SuperList = (props) => {
	const [state, setState] = useState([]);
	const [searchState, setSearchState] = useState("");
	const search = (arg) => {
		setState(
			props.state.filter((e) =>
				e.productHeader.toLowerCase().includes(arg.toLowerCase())
			)
		);
	};
	const ref = React.useRef(search);
	useEffect(() => setState(props.state), [props.state]);
	useEffect(() => ref.current(searchState), [searchState]);

	return (
		<Container style={{ margin: "4em 0" }}>
			<div>
				<Menu attached="top">
					<Dropdown item icon="wrench" simple>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Icon name="dropdown" />
								<span className="text">New</span>

								<Dropdown.Menu>
									<Dropdown.Item>Disabled</Dropdown.Item>
									<Dropdown.Item>Disabled</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown.Item>
							<Dropdown.Item>Disabled</Dropdown.Item>
							<Dropdown.Item>Disabled...</Dropdown.Item>
							<Dropdown.Item>Disabled</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Export</Dropdown.Header>
							<Dropdown.Item>Disabled</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Menu.Menu position="right">
						<div className="ui right aligned category search item">
							<div className="ui transparent icon input">
								<input
									className="prompt"
									type="text"
									placeholder="Ara"
									value={searchState}
									onChange={(e) => setSearchState(e.target.value)}
								/>
								<i className="search link icon" />
							</div>
							<div className="results" />
						</div>
					</Menu.Menu>
				</Menu>

				<Table celled attached="bottom">
					<Table.Header>
						<Table.Row textAlign="center">
							<Table.HeaderCell>#</Table.HeaderCell>
							<Table.HeaderCell>Adı</Table.HeaderCell>
							<Table.HeaderCell>Stok</Table.HeaderCell>
							<Table.HeaderCell>İndirim</Table.HeaderCell>
							<Table.HeaderCell>Fiyat</Table.HeaderCell>
							<Table.HeaderCell>Düzenle</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{state.map &&
							state
								.sort((a, b) => a.productHeader.localeCompare(b.productHeader))
								.map((item, index) => (
									<React.Fragment key={item.productURL}>
										<Table.Row>
											<Table.Cell
												textAlign="center"
												style={{ fontSize: "1.35em", verticalAlign: "middle" }}
												negative={item.stock < 1 ? true : false}
												positive={item.stock > 0 ? true : false}
												selectable
											>
												{index}
											</Table.Cell>
											<Table.Cell
												style={{
													fontSize: "1.35em",
													verticalAlign: "middle",
													padding: ".5em .2em",
												}}
												negative={item.stock < 1 ? true : false}
												positive={item.stock > 0 ? true : false}
												selectable
											>
												<Header as={Link} to={item.productURL} image>
													<Image
														src={item.images[0].data_url}
														rounded
														size="mini"
													/>
													<Header.Content>
														{item.productHeader}
														<Header.Subheader>
															{" "}
															Beden: {item.size}
														</Header.Subheader>
													</Header.Content>
												</Header>
											</Table.Cell>
											<Table.Cell
												textAlign="center"
												style={{ fontSize: "1.55em", verticalAlign: "middle" }}
												negative={item.stock < 1 ? true : false}
												positive={item.stock > 0 ? true : false}
												selectable
											>
												<Button.Group size="large" style={{}}>
													<Button
														icon
														onClick={() =>
															props.handleStock({ ...item, count: 1 })
														}
													>
														<Icon name="plus" />
													</Button>
													<Button.Or
														style={{ fontSize: "17px" }}
														text={item.stock}
													/>
													<Button
														icon
														onClick={() =>
															props.handleStock({ ...item, count: -1 })
														}
													>
														<Icon name="minus" />
													</Button>
												</Button.Group>
											</Table.Cell>
											<Table.Cell
												textAlign="center"
												style={{ fontSize: "1.35em", verticalAlign: "middle" }}
												negative={item.stock < 1 ? true : false}
												positive={item.stock > 0 ? true : false}
												selectable
											>
												<Icon size="small" name="percent" />
												{item.discount}
											</Table.Cell>
											<Table.Cell
												textAlign="center"
												style={{ fontSize: "1.35em", verticalAlign: "middle" }}
												negative={item.stock < 1 ? true : false}
												positive={item.stock > 0 ? true : false}
												selectable
											>
												{item.price -
													((item.price * item.discount) / 100).toFixed(2) +
													" TL"}
											</Table.Cell>
											<Table.Cell
												textAlign="center"
												style={{ fontSize: "1.35em", verticalAlign: "middle" }}
												negative={item.stock < 1 ? true : false}
												positive={item.stock > 0 ? true : false}
												selectable
											>
												<Button onClick={() => props.editPost(item)}>
													<Icon style={{ margin: "auto" }} name="setting" />
												</Button>
												<Button
													onClick={() =>
														props.editPost({
															...item,
															id: Date.now(),
															productURL: "slug/" + Date.now(),
														})
													}
												>
													<Icon style={{ margin: "auto" }} name="copy" />
												</Button>
												<Button
													onClick={() => props.deletePost(item.productURL)}
												>
													<Icon style={{ margin: "auto" }} name="trash" />
												</Button>
												<Button
													color={item.publish ? "green" : "red"}
													onClick={() => props.featuredPost(item)}
												>
													<Icon
														style={{ margin: "auto" }}
														name={item.publish ? "eye" : "eye slash outline"}
													/>
												</Button>
												<Button
													as={Link}
													to="/supertest"
													onClick={() => props.setTest(item)}
												>
													<Icon style={{ margin: "auto" }} name="tv" />
												</Button>
											</Table.Cell>
										</Table.Row>
									</React.Fragment>
								))}
					</Table.Body>
				</Table>
			</div>
		</Container>
	);
};

SuperList.propTypes = {
	state: PropTypes.array,
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
	};
};

export default connect(mapStateToProps, {
	addPost,
	deletePost,
	featuredPost,
	editPost,
	handleStock,
	setTest,
})(SuperList);

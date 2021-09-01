import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Icon, Reveal, Image, Grid, Header, Button } from "semantic-ui-react";
import SuperHeader from "./SuperHeader";

const SuperTest = (props) => {
	const history = useHistory();
	return (
		<SuperHeader>
			<Grid
				key={props.state.productURL}
				container
				stackable
				verticalAlign="middle"
				style={{ margin: "20px 0px 110px" }}
			>
				<Grid.Column width={10}>
					<Reveal animated="move right">
						<Reveal.Content visible>
							<Image src={props.state.images[0].data_url} size="large" />
						</Reveal.Content>
						<Reveal.Content hidden>
							<Image src={props.state.images[1].data_url} size="large" />
						</Reveal.Content>
					</Reveal>
				</Grid.Column>
				<Grid.Column
					floated="right"
					width={6}
					style={{ marginLeft: "0px", borderLeft: "1px solid rgba(0,0,0,0.1)" }}
				>
					<Header as="h3" style={{ fontSize: "2em" }}>
						{props.state.productHeader}
					</Header>
					<p style={{ fontSize: "1.33em" }}>{props.state.productBody}</p>
					{props.state.discount > 0 && props.state.price > 149 ? (
						<React.Fragment>
							<div style={{ fontSize: "1.33em" }}>
								<Icon name="percent" color="red" />
								{props.state.discount} indirim
								<Icon
									style={{ marginLeft: "15px" }}
									name="shipping fast"
									color="red"
								/>
								Bedava
							</div>
						</React.Fragment>
					) : props.state.discount > 0 ? (
						<div style={{ fontSize: "1.33em" }}>
							<Icon name="percent" color="red" />
							{props.state.discount} indirim
						</div>
					) : props.state.shipping === true || props.state.price > 149 ? (
						<div style={{ fontSize: "1.33em", color: "red" }}>
							<Icon name="shipping fast" color="red" />
							Bedava
						</div>
					) : null}
					<Header style={{ fontSize: "1.33em" }}>
						Fiyat:{" "}
						{props.state.discount ? (
							<React.Fragment>
								<span
									style={{
										textDecoration: "line-through",
										marginRight: "10px",
									}}
								>
									{props.state.price + " TL"}
								</span>
								<span>
									{props.state.price -
										((props.state.price * props.state.discount) / 100).toFixed(
											2
										) +
										" TL"}
								</span>
							</React.Fragment>
						) : (
							<span>{props.state.price + " TL"}</span>
						)}
					</Header>
					<Grid container stackable style={{ marginTop: "5px" }}>
						<Grid.Row>
							<p floated="left" style={{ fontSize: "1.33em" }}>
								Beden:
							</p>
						</Grid.Row>
						<Grid.Row textAlign="center">
							<div style={{ marginTop: "10px" }}>
								<Button
									primary
									size="large"
									onClick={history.goBack}
									content="Geri Dön"
								/>
								<p style={{ marginTop: "15px" }}>
									Tahmini teslimat süresi: 2 gün
								</p>
							</div>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid>
		</SuperHeader>
	);
};

SuperTest.propTypes = {
	state: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		state: state.testState,
	};
};

export default connect(mapStateToProps)(SuperTest);

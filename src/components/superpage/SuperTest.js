import React from "react";
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
							<Image src={props.state.data_url} size="medium" />
						</Reveal.Content>
						<Reveal.Content hidden>
							<Image
								src="https://cdn.dsmcdn.com/mnresize/415/622/ty76/product/media/images/20210225/14/66899714/142499060/5/5_org_zoom.jpg"
								size="medium"
							/>
						</Reveal.Content>
					</Reveal>
				</Grid.Column>
				<Grid.Column
					floated="right"
					width={6}
					style={{ marginLeft: "0px", borderLeft: "1px solid rgba(0,0,0,0.1)" }}
				>
					<Header as="h3" style={{ fontSize: "2em" }}>
						Molior Spring Collection #21 Black Queen
					</Header>
					<p style={{ fontSize: "1.33em" }}>
						Siyah Fisto Detaylı Vual Plaj Elbise
					</p>
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

const mapStateToProps = (state) => {
	return {
		state: state.testState,
	};
};

export default connect(mapStateToProps)(SuperTest);

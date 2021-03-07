import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
	Icon,
	Message,
	Reveal,
	Image,
	Grid,
	Header,
	Button,
} from "semantic-ui-react";
import { add2cart } from "./DummyAction";

// style={{backgroundColor: ''}}
const MyButton = ({ ea, setDummyState, dummyState }) => {
	useEffect(() => {
		setDummyState(ea);
	}, [ea, setDummyState]);

	return (
		<Button
			key={ea.productURL}
			primary={ea.size === dummyState.size}
			onClick={() => setDummyState(ea)}
		>
			{ea.size}
		</Button>
	);
};
const DummyBody = (props) => {
	let { slug } = useParams();
	const [dummyState, setDummyState] = useState({});
	const [message, setMessage] = useState(false);

	return props.state
		.filter((item) => item.productURL === "slug/" + slug)
		.map((item) => (
			<Grid
				key={item.productURL}
				container
				stackable
				verticalAlign="middle"
				style={{ margin: "20px 0px 110px" }}
			>
				<Grid.Column width={10}>
					<Reveal animated="move right">
						<Reveal.Content visible>
							<Image src={item.data_url} size="medium" />
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
					{dummyState.discount > 0 && dummyState.price > 149 ? (
						<React.Fragment>
							<div style={{ fontSize: "1.33em" }}>
								<Icon name="percent" color="red" />
								{dummyState.discount} indirim
								<Icon
									style={{ marginLeft: "15px" }}
									name="shipping fast"
									color="red"
								/>
								Bedava
							</div>
						</React.Fragment>
					) : dummyState.discount > 0 ? (
						<div style={{ fontSize: "1.33em" }}>
							<Icon name="percent" color="red" />
							{item.discount} indirim
						</div>
					) : dummyState.shipping === true || item.price > 149 ? (
						<div style={{ fontSize: "1.33em", color: "red" }}>
							<Icon name="shipping fast" color="red" />
							Bedava
						</div>
					) : null}
					<Header style={{ fontSize: "1.33em" }}>
						Fiyat:{" "}
						{dummyState.discount ? (
							<React.Fragment>
								<span
									style={{
										textDecoration: "line-through",
										marginRight: "10px",
									}}
								>
									{item.price + " TL"}
								</span>
								<span>
									{item.price -
										((item.price * item.discount) / 100).toFixed(2) +
										" TL"}
								</span>
							</React.Fragment>
						) : (
							<span>{item.price + " TL"}</span>
						)}
					</Header>
					<Grid container stackable style={{ marginTop: "5px" }}>
						<Grid.Row>
							<p floated="left" style={{ fontSize: "1.33em" }}>
								Beden:
							</p>
							<div>
								{props.state
									.filter((el) => el.productHeader === item.productHeader)
									.sort((arg1, arg2) => arg1.size - arg2.size)
									.map(
										(ea) =>
											ea.stock > 0 && (
												<MyButton
													key={ea.id}
													ea={ea}
													setDummyState={setDummyState}
													dummyState={dummyState}
												/>
											)
									)}
							</div>
						</Grid.Row>
						<Grid.Row textAlign="center">
							<div style={{ marginTop: "10px" }}>
								{message && (
									<Message
										warning
										header="Uyarı"
										content="Sepete eklemeden önce beden seçmelisiniz."
									/>
								)}
								<Button
									icon={{
										name:
											dummyState &&
											!(dummyState.stock > 0 || dummyState.length > 0)
												? "box"
												: "shopping basket",
									}}
									onClick={() => {
										if (dummyState.id) {
											props.add2cart(dummyState);
										} else {
											setMessage(true);
											setTimeout(() => setMessage(false), 5000);
										}
									}}
									content={
										dummyState &&
										!(dummyState.stock > 0 || dummyState.length > 0)
											? "Tükendi"
											: "Sepete Ekle"
									}
									disabled={
										dummyState &&
										!(dummyState.stock > 0 || dummyState.length > 0)
									}
									size="large"
								/>
								<p style={{ marginTop: "15px" }}>
									Tahmini teslimat süresi: 2 gün
								</p>
							</div>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid>
		));
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		cart: state.cart,
	};
};

export default connect(mapStateToProps, { add2cart })(DummyBody);

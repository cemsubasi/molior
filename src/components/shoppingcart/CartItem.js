import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button, List, Image } from "semantic-ui-react";

function CartItem({ props, item }) {
	return (
		<List.Item>
			<Image
				rounded
				size="small"
				floated="left"
				src={item.images[0].data_url}
			/>
			<List.Content
				floated="left"
				style={{
					minWidth: "240px",
					textAlign: "left",
					paddingLeft: "0px",
					marginTop: ".5em",
				}}
			>
				<List.Header
					as={Link}
					to={item.productURL}
					style={{ fontSize: "1.77em" }}
				>
					{item.productHeader}
				</List.Header>
				<List.Description style={{ fontSize: "1.33em", marginTop: "1em" }}>
					{item.productBody}
					<p
						style={{
							fontSize: "1em",
							marginTop: "0.3em",
							marginBottom: "0.1em",
						}}
					>
						<span>Fiyat: </span>
						{item.discount ? (
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
									{+item.price - (+item.price * item.discount) / 100 + " TL"}
								</span>
							</React.Fragment>
						) : (
							<span>{item.price + " TL"}</span>
						)}
					</p>
					<p style={{ marginBottom: "0.1em" }}>
						<b>Beden: </b> {item.size}
					</p>
					<p>
						Adet:{" "}
						{props.state.filter &&
							props.state.filter((el) => item.id === el.id).length}
					</p>
				</List.Description>
				<div>
					<div style={{ margin: "7px 0px" }}>
						<Button icon onClick={() => props.add2cart(item)}>
							{" "}
							<Icon name="plus" />{" "}
						</Button>
						<Button icon onClick={() => props.deleteFromCart(item)}>
							{" "}
							<Icon name="minus" />{" "}
						</Button>
						<Button icon onClick={() => props.banFromCart(item)}>
							{" "}
							<Icon name="trash" />{" "}
						</Button>
					</div>
				</div>
			</List.Content>
		</List.Item>
	);
}
export default CartItem;

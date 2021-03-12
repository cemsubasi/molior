import React from "react";
import { Icon } from "semantic-ui-react";

function CardContent({ props, style }) {
	if (props.discount > 0 && (props.price > 149 || props.shipping))
		return (
			<div style={{ color: "red", ...style }}>
				<Icon name="percent" color="red" />
				{props.discount} indirim
				<Icon
					style={{ marginLeft: "15px" }}
					name="shipping fast"
					color="red"
				/>{" "}
				Bedava
			</div>
		);
	else if (props.discount > 0)
		return (
			<div style={{ marginRight: "10px", color: "red", ...style }}>
				<Icon name="percent" color="red" />
				{props.discount} indirim
			</div>
		);
	else if (props.shipping === true || props.price > 149)
		return (
			<div style={{ color: "red", ...style }}>
				<Icon name="shipping fast" color="red" /> Bedava
			</div>
		);
	return null;
}

export default CardContent;

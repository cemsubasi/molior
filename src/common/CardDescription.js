import React from "react";

function CardDescription({ props }) {
	if (props.discount)
		return (
			<>
				Fiyat:{" "}
				<span
					style={{
						textDecoration: "line-through",
						marginRight: "10px",
					}}
				>
					{props.price + " TL"}
				</span>
				<span>
					{props.price -
						((props.price * props.discount) / 100).toFixed(2) +
						" TL"}
				</span>
			</>
		);
	return (
		<>
			Fiyat: <span>{props.price + " TL"}</span>
		</>
	);
}

export default CardDescription;

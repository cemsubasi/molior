import React from "react";
import { Image } from "semantic-ui-react";

function DiscountLabel({ props }) {
	if (props.discount > 0)
		return (
			<Image
				style={{ margin: "auto" }}
				label={{
					color: "red",
					content: props.discount,
					icon: "percent",
					ribbon: true,
				}}
				src={props.data_url}
				wrapped
				ui={false}
			/>
		);
	return (
		<Image style={{ margin: "auto" }} src={props.data_url} wrapped ui={false} />
	);
}
export default DiscountLabel;

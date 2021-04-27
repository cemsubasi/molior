import { Message } from "semantic-ui-react";

function Alert({ props }) {
	if (props.status)
		return (
			<Message
				success={props.name === "success" ? true : false}
				negative={props.name === "negative" ? true : false}
				header={props.message}
				content={props.error && props.error.message}
			/>
		);
	return null;
}

export default Alert;

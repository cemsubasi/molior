function Alert({ props }) {
	if (props.status)
		return (
			<div className={props.classname} role="alert">
				<h3>{props.message}</h3>
				{props.error && <h4>{props.error.message}</h4>}
			</div>
		);
	return null;
}

export default Alert;

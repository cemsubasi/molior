import React, { useState } from "react";
import { Container, Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { axiosCall } from "../../config";
import CartBanner from "../shoppingcart/CartBanner";
import Dimmer from "../../common/Dimmer";
import { countries } from "../../gistfile1.json";

function PaymentBody(props) {
	const INITIAL_STATE = {
		name: "",
		surname: "",
		address: "",
		phone: "",
		email: "",
		country: "Turkey",
		state: "",
		zip: "",
		cardNumber: "",
		day: 1,
		month: 1,
		cvc: "",
		terms: false,
	};

	function submit(arg) {
		return axiosCall("post", "/order", arg)
			.then(dimmerHandler)
			.catch((err) => console.log("Baglanti Hatasi: Cart", err));
	}

	const [state, setState] = useState(INITIAL_STATE);
	const [dimmer, setDimmer] = useState(false);
	const stateHandler = (e, data) =>
		setState({
			...state,
			[e.target.name]: e.target.value,
			[data.name]: data.value,
		});

	const opt = [];
	countries.forEach((each, index) => {
		opt[index] = {};
		opt[index].key = index;
		opt[index].text = each.country;
		opt[index].value = each.country;
	});
	const opt2 = [];
	if (countries.some((each) => each.country === state.country)) {
		countries
			.find((each) => each.country === state.country)
			.states.forEach((each, index) => {
				opt2[index] = {};
				opt2[index].key = index;
				opt2[index].text = each;
				opt2[index].value = each;
			});
	}
	const optMonth = [];
	for (let i = 0; i < 12; i++) {
		optMonth[i] = { key: i, text: i + 1, value: i + 1 };
	}
	const optDay = [];
	for (let i = 0; i < 31; i++) {
		optDay[i] = { key: i, text: i + 1, value: i + 1 };
	}
	const dimmerHandler = () => {
		setDimmer(true);
		setTimeout(() => setDimmer(false), 2000);
	};
	console.log("state", state);
	return (
		<>
			<Dimmer open={dimmer} />
			<Container style={{ margin: "3em 0 8em 0" }}>
				<CartBanner select="card" />
				<Form>
					<Form.Group unstackable widths={2}>
						<Form.Input
							label="First name"
							name="name"
							value={state.name}
							onChange={stateHandler}
							placeholder="First name"
							required
						/>
						<Form.Input
							label="Last name"
							name="surname"
							value={state.surname}
							onChange={stateHandler}
							placeholder="Last name"
							required
						/>
					</Form.Group>
					<Form.Group widths={2}>
						<Form.Input
							label="Address"
							name="address"
							value={state.address}
							onChange={stateHandler}
							width={8}
							placeholder="Address"
							required
						/>
						<>
							<Form.Input
								label="Phone"
								name="phone"
								value={state.phone}
								onChange={stateHandler}
								width={4}
								placeholder="Phone"
								required
							/>
							<Form.Input
								label="Email"
								name="email"
								value={state.email}
								onChange={stateHandler}
								width={4}
								placeholder="Email"
								type="email"
								required
							/>
						</>
					</Form.Group>
					<Form.Group widths={3}>
						<Form.Dropdown
							search
							selection
							wrapSelection={false}
							label="Country"
							name="country"
							placeholder="Country"
							onChange={(e, data) => stateHandler(e, data)}
							value={state.country}
							options={opt}
							required
						/>
						<Form.Dropdown
							search
							selection
							wrapSelection={false}
							label="State"
							name="state"
							placeholder="State"
							onChange={(e, data) => stateHandler(e, data)}
							value={state.state}
							options={opt2}
							required
						/>
						<Form.Input
							label="Zip"
							name="zip"
							value={state.zip}
							onChange={stateHandler}
							placeholder="Zip"
						/>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							label="Card Number"
							name="cardNumber"
							value={state.cardNumber}
							onChange={stateHandler}
							width={6}
							placeholder="4543 XXXX XXXX 1234"
							required
						/>
						<>
							<Form.Dropdown
								search
								selection
								fluid
								label="Day"
								name="day"
								width={4}
								options={optDay}
								onChange={(e, data) => stateHandler(e, data)}
								value={state.day}
								placeholder="DD"
								required
								wrapSelection={false}
							/>
							<Form.Dropdown
								search
								selection
								fluid
								label="Month"
								name="month"
								width={4}
								options={optMonth}
								onChange={(e, data) => stateHandler(e, data)}
								value={state.month}
								placeholder="MM"
								required
								wrapSelection={false}
							/>
						</>
						<Form.Input
							fluid
							label="CVC"
							name="cvc"
							value={state.cvc}
							onChange={stateHandler}
							width={2}
							placeholder="XXX"
							type="password"
							required
						/>
					</Form.Group>
					<Form.Checkbox
						label="I agree to the Terms and Conditions"
						name="terms"
						onClick={(e, data) => setState({ ...state, terms: data.checked })}
						required
					/>
					<Button
						type="submit"
						onClick={() => {
							submit({
								cart: props.cart.map((item) =>
									item ? { ...item, images: "", status: "none" } : item
								),
								credentials: { ...state, orderId: Date.now() },
							});
						}}
						disabled={!state.terms}
					>
						Submit
					</Button>
				</Form>
			</Container>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(PaymentBody);

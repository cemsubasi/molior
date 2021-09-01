import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	addPost,
	deletePost,
	featuredPost,
	replacePost,
	editPost,
} from "./superAction";
import ImageUploading from "react-images-uploading";
import { dateParsed } from "../../config";
import { Container, Select, Input, Form, Button } from "semantic-ui-react";
import Alert from "../../common/Alert";

const SuperForm = (props) => {
	const INITIAL = {
		id: Date.now(),
		productURL: "slug/" + Date.now(),
		productHeader: "",
		productBody: "",
		price: 0,
		totalPrice: 0,
		size: "",
		stock: 0,
		category: "",
		collect: "",
		discount: 0,
		shipping: false,
		date: dateParsed,
		title: "",
		publish: false,
		images: [],
	};
	const [inputState, setInputState] = useState(INITIAL);
	const [images, setImages] = useState([]);
	const maxNumber = 2;
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		// console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	const inputStateHandler = (event, data) =>
		setInputState({
			...inputState,
			[event.target.name]: event.target.value,
			[data.name]: data.value,
		});
	useEffect(() => setInputState(props.editState), [
		props.editState,
		setInputState,
	]);

	useEffect(
		() => {
			setInputState({
				...inputState,
				images,
			});
		},
		// eslint-disable-next-line
		[images]
	);
	useEffect(
		() =>
			setInputState({
				...inputState,
				productURL: inputState.category + "/" + Date.now(),
			}),
		// eslint-disable-next-line
		[inputState.category, setInputState]
	);
	useEffect(
		() => {
			setInputState({
				...inputState,
				totalPrice: (
					(inputState.price * (100 - inputState.discount)) /
					100
				).toFixed(2),
			});
		},
		// eslint-disable-next-line
		[inputState.price, inputState.discount]
	);

	console.log("inputState", inputState);
	const Submit = () => {
		//if there is one other with same url then edit that object
		if (props.state.some((user) => user.id === inputState.id)) {
			setInputState(INITIAL);
			return props.replacePost(inputState);
		}
		props.editPost(INITIAL);

		return props.addPost(inputState);
	};

	const categoryOptions = [
		{ key: "category1", value: "elbise", text: "Elbise" },
		{ key: "category2", value: "alt-giyim", text: "Alt Giyim" },
		{ key: "category3", value: "ust-giyim", text: "Üst Giyim" },
	];
	const sizeOptions = [
		{ key: "size1", value: "34", text: "34" },
		{ key: "size2", value: "36", text: "36" },
		{ key: "size3", value: "38", text: "38" },
		{ key: "size4", value: "40", text: "40" },
		{ key: "size5", value: "42", text: "42" },
	];
	const collectOptions = [
		{ key: "collect1", value: "summer", text: "Yaz" },
		{ key: "collect2", value: "winter", text: "Kış" },
	];
	const shippingOptions = [
		{ key: "shipping1", value: true, text: "Ücretsiz" },
		{ key: "shipping2", value: false, text: "Ücretli" },
	];

	console.log(props.state);
	return (
		<Container>
			<Alert props={props.errState} />
			<Form>
				<Form.Group widths="equal">
					<Form.Field
						id="form-input-control-first-name"
						control={Input}
						onChange={inputStateHandler}
						value={inputState.productHeader}
						name="productHeader"
						label="Başlık"
						placeholder="Ürün Başlığı"
					/>
					<Form.Field
						id="form-input-control-last-name"
						control={Input}
						onChange={inputStateHandler}
						value={inputState.productBody}
						name="productBody"
						label="Yan Başlık"
						placeholder="Ürün Yan Başlığı"
					/>
					<Form.Group>
						<Form.Field
							id="form-input-control-last-name"
							control={Input}
							onChange={inputStateHandler}
							value={inputState.price}
							name="price"
							icon="try"
							label="Fiyat"
							placeholder="TL"
						/>
						<Form.Field
							id="form-input-control-last-name"
							control={Input}
							onChange={inputStateHandler}
							value={inputState.discount}
							name="discount"
							icon="percent"
							label="İndirim"
							placeholder="İndirim Yüzdesi"
						/>
						<Form.Field
							control={Select}
							onChange={(event, data) => inputStateHandler(event, data)}
							options={shippingOptions}
							value={inputState.shipping}
							name="shipping"
							label={{
								children: "Kargo",
								htmlFor: "form-select-control-gender",
							}}
							placeholder="Kargo"
							searchInput={{ id: "form-select-control-gender" }}
						/>
					</Form.Group>
				</Form.Group>
				<Form.Group widths="equal">
					<Form.Field
						control={Select}
						onChange={(event, data) => inputStateHandler(event, data)}
						value={inputState.size}
						name="size"
						options={sizeOptions}
						label={{ children: "Beden", htmlFor: "form-select-control-gender" }}
						placeholder="Beden"
						searchInput={{ id: "form-select-control-gender" }}
					/>
					<Form.Field
						id="form-input-control-last-name"
						control={Input}
						onChange={inputStateHandler}
						value={inputState.stock}
						name="stock"
						label="Stok"
						placeholder="Stok miktari"
					/>
					<Form.Field
						control={Select}
						options={categoryOptions}
						onChange={(event, data) => inputStateHandler(event, data)}
						value={inputState.category}
						name="category"
						label={{
							children: "Kategori",
							htmlFor: "form-select-control-gender",
						}}
						placeholder="Kategori"
						searchInput={{ id: "form-select-control-gender" }}
					/>
					<Form.Field
						control={Select}
						options={collectOptions}
						onChange={(event, data) => inputStateHandler(event, data)}
						value={inputState.collect}
						name="collect"
						label={{
							children: "Koleksiyon",
							htmlFor: "form-select-control-gender",
						}}
						placeholder="Koleksiyon"
						searchInput={{ id: "form-select-control-gender" }}
					/>
				</Form.Group>
				<Form.Group>
					<ImageUploading
						multiple
						value={images}
						onChange={onChange}
						maxNumber={maxNumber}
						dataURLKey="data_url"
					>
						{({
							imageList,
							onImageUpload,
							onImageRemove,
							onImageRemoveAll,
							dragProps,
						}) => (
							// write your building UI
							<div className="upload__image-wrapper m-auto">
								{imageList.map((image, index) => (
									<div key={index} className="image-item m-auto">
										<div className="card col-4 shadow-sm m-auto">
											<img
												src={image.data_url}
												className="bd-placeholder-img m-auto"
												style={{ maxWidth: "395px" }}
												height="300"
												alt=""
											/>

											<div className="card-body">
												<p className="card-text">{inputState.title}</p>
											</div>
										</div>
									</div>
								))}
								&nbsp;
								<Input
									{...dragProps}
									onClick={() => {
										onImageRemoveAll();
										onImageUpload();
									}}
									type="file"
									className="form-control "
									id="inputGroupFile03"
									aria-describedby="inputGroupFileAddon03"
									aria-label="Upload"
									style={{ maxWidth: "400px" }}
								/>
								<Form.Group style={{ margin: "1em 0em" }}>
									<Form.Field
										id="form-button-control-public"
										control={Button}
										content="Gönder"
										label="Gönder"
										primary
										onClick={Submit}
									/>
									<Form.Field
										id="form-button-control-public"
										control={Button}
										color="red"
										content="Temizle"
										label="Temizle"
										onClick={() => {
											props.editPost(INITIAL);
											onImageRemoveAll();
										}}
									/>
								</Form.Group>
							</div>
						)}
					</ImageUploading>
				</Form.Group>
			</Form>
		</Container>
	);
};

SuperForm.propTypes = {
	state: PropTypes.array,
	editState: PropTypes.object,
	errState: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		editState: state.editState,
		errState: state.errState,
	};
};

export default connect(mapStateToProps, {
	addPost,
	deletePost,
	featuredPost,
	replacePost,
	editPost,
})(SuperForm);

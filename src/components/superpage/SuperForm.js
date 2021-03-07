import React, { useState } from "react";
import { connect } from "react-redux";
import {
	addPost,
	deletePost,
	featuredPost,
	replacePost,
	editPost,
	setErr,
} from "./SuperAction";
import ImageUploading from "react-images-uploading";
import { dateParsed } from "../../Data";
import { useEffect } from "react";
import { Container, Select, Input, Form, Button } from "semantic-ui-react";

const SuperForm = (props) => {
	const INITIAL = {
		id: Date.now(),
		productURL: "slug/" + Date.now(),
		productHeader: "",
		productBody: "",
		price: 0,
		size: "",
		stock: 0,
		category: "",
		collect: "",
		discount: 0,
		shipping: false,
		date: dateParsed,
		data_url: "",
		file: {},
		title: "",
		publish: false,
	};
	const [inputState, setInputState] = useState(INITIAL);
	const [images, setImages] = useState([]);
	const maxNumber = 1;
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		// console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	useEffect(() => setInputState(props.editState), [
		props.editState,
		setInputState,
	]);

	const inputStateHandler = (event, data) =>
		setInputState({
			...inputState,
			[event.target.name]: event.target.value,
			[data.name]: data.value,
		});
	const inputStateClear = () =>
		setInputState({
			id: Date.now(),
			productURL: "slug/" + Date.now(),
			productHeader: "",
			productBody: "",
			price: 0,
			size: "",
			stock: 0,
			category: "",
			collect: "",
			discount: 0,
			shipping: false,
			date: dateParsed,
			// data_url: "",
			// file: {},
			title: "",
			publish: false,
		});

	useEffect(
		() => {
			setInputState({
				...inputState,
				...images[0],
			});
		},
		// eslint-disable-next-line
		[images]
	);
	const setClearInputs = () =>
		setInputState({
			...inputState,
			data_url: "",
			file: {},
		});

	const Submit = () => {
		//if there is one other with same url then edit that object
		if (props.state.some((user) => user.productURL === inputState.productURL)) {
			inputStateClear();
			props.setErr(0);
			return props.replacePost(inputState);
		} else {
			inputStateClear();
			setClearInputs();
			props.editPost(INITIAL);
			props.setErr(0);

			return props.addPost(inputState);
		}
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

	return (
		<Container>
			{(() => {
				switch (props.errState) {
					case 0:
						return (
							<div className="alert alert-success" role="alert">
								Post has been sent successfuly!
							</div>
						);
					case 1:
						return (
							<div className="alert alert-danger" role="alert">
								Post Url must be unique and cannot include blank or special
								charachters! — check it out!
							</div>
						);
					case 2:
						return (
							<div className="alert alert-success" role="alert">
								Post was deleted successfuly!
							</div>
						);
					default:
						return null;
				}
			})()}

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
						{({ imageList, onImageUpload, onImageRemove, dragProps }) => (
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
										onImageRemove();
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
										}}
									/>
									<Form.Field
										id="form-button-control-public"
										control={Button}
										color="red"
										label="Foto Temizle"
										content="Foto Temizle"
										onClick={onImageRemove}
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

const mapStateToProps = (state) => {
	return {
		state: state.postState,
		editState: state.editState,
		errState: state.errState,
		err: state.errMessage,
	};
};

export default connect(mapStateToProps, {
	addPost,
	deletePost,
	featuredPost,
	replacePost,
	editPost,
	setErr,
})(SuperForm);

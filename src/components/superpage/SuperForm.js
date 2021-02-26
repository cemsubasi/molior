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
import SuperModal from "./SuperModal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImageUploading from 'react-images-uploading';
import { dateParsed } from "../../Data";
import { useEffect } from "react";

const SuperForm = (props) => {
  // eslint-disable-next-line
  const [text, setText] = useState("");
  const [edit, setEdit] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [inputState, setInputState] = useState({
    id: Date.now(),
		thumbnail: 'Negro',
		postUrl: 'slug/' + Date.now(),
    postHeader: "",
    postBody: "",
    author: "İdil Subaşı",
    category: "",
    date: dateParsed,
    featured: false,
    comments: [],
    data_url: "",
    file: {},
    title: "",
  });
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
	const textHandler = () => setText('');

  useEffect(
    () => setInputState({ ...inputState, postBody: text }),
    // eslint-disable-next-line
    [text]
  );
  useEffect(
    () => setEdit(props.state.filter((e) => e.postUrl === props.editState)),
    // eslint-disable-next-line
    [props.editState]
  );
  useEffect(
    () => {
      if (edit[0]) {
        setInputState({ ...inputState, ...edit[0] });
        setText(edit[0].postBody);
      }
    },
    // eslint-disable-next-line
    [edit]
  );
  useEffect(() => console.log(props), [props]);

  const inputStateHandler = (e) =>
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  const inputStateClear = () =>
    setInputState({
      id: Date.now(),
			thumbnail: 'Negro',
			postUrl: 'slug/' + Date.now(),
      postHeader: "",
      postBody: "",
      author: "İdil Subaşı",
      category: "",
      date: dateParsed,
      featured: false,
      comments: [],
			data_url: "",
			file: {},
			title: "",
    });

  useEffect(
    () => {
      setInputState({
				...inputState,
        ...images[0],
        title: inputState.title,
        category: inputState.category,
      });
      console.log(inputState);
    },
    // eslint-disable-next-line
    [images]
  );
	const setClearInputs = () =>
		setInputState({
			...inputState,
			data_url: "",
			file: {},
			date: "",
			title: "",
			category: "Ben",
		
		});


  const Submit = () => {
    //if there is one other with same url then edit that object
    if (props.state.some((user) => user.postUrl === inputState.postUrl)) {
      // setText("");
      // inputStateClear();
      // props.setErr(0);
      setModalShow(true);
      // return props.replacePost(inputState);
    }
    //url doesnt be empty or take blank
    //i should implement real url algorithm
    else if (inputState.postUrl === "" || inputState.postUrl.includes(" ")) {
      props.setErr(1);
      //success
    } else {
      setText("");
      inputStateClear();
			props.editPost('');
      props.setErr(0);

      return props.addPost(inputState);
    }
  };

  return (
    <div className="container">
      <SuperModal texthandler={textHandler} editpost={props.editPost} seterr={props.setErr} replacepost={props.replacePost} show={modalShow} inputstateclear={inputStateClear} inputstate={inputState} onHide={() => setModalShow(false)} />
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

      <div className="row m-2auto">
        <div className="col-6 p-2">
				<label className="form-label">Thumbnail</label>
				<select
					className="form-select m-auto"
					name="thumbnail"
					value={inputState.thumbnail}
					onChange={(e) => inputStateHandler(e)}
					aria-label="Default select example">
					<option value="Negro">Negro</option>
					<option value="Punch">Punch</option>
				</select>
				</div>
        <div className="col-6 p-2">
          <label className="form-label">Post Header</label>
          <input
            type="text"
            className="form-control"
            name="postHeader"
            value={inputState.postHeader}
            onChange={inputStateHandler}
            id="exampleFormControlInput1"
            placeholder="Post Header"
          />
        </div>
      </div>
      <div className="row m-2auto">
        <div className="col-6 p-2">
          <label className="form-label">Post Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={inputState.author}
            onChange={inputStateHandler}
            id="exampleFormControlInput1"
            placeholder="Author"
          />
        </div>
        <div className="col-6 p-2">
          <label className="form-label">Post Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={inputState.category}
            onChange={inputStateHandler}
            id="exampleFormControlInput1"
            placeholder="Category"
          />
        </div>
      </div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
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
                    <div>
                      <small className="text-muted">{inputState.date}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            &nbsp;
            <div className="row" style={{ maxWidth: "650px", margin: "auto" }}>
              <div className="col-9 py-3">
                <input
                  type="text"
                  className="form-control m-auto"
                  name="title"
                  value={inputState.title}
                  onChange={inputStateHandler}
                  id="exampleFormControlInput1"
                  placeholder="Description"
                />
              </div>
              <div className="col-3 py-3">
                <select
                  className="form-select m-auto"
                  name="category"
                  value={inputState.category}
                  onChange={inputStateHandler}
                  aria-label="Default select example">
                  <option value="Ben">Ben</option>
                  <option value="Onlar">Onlar</option>
                </select>
              </div>

              <div
                className="input-group mb-3"
                style={{ maxWidth: "650px", margin: "auto" }}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    props.addPhoto(inputState);
                    setClearInputs();
                    onImageRemove();
                  }}
                  type="button"
                  id="inputGroupFileAddon03">
                  Save
                </button>

                <input
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
                />

                <button
                  className="btn btn-outline-secondary"
                  onClick={onImageRemove}
                  type="button"
                  id="inputGroupFileAddon04">
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </ImageUploading>

      <div className="editor mb-3 m-2auto">
        <CKEditor
          editor={ClassicEditor}
          name="postBody"
          value={text}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
          id="exampleFormControlTextarea1"
          rows="5"
        />
      </div>
      <div className="my-3">
        <button className="btn btn-outline-dark mb-3" onClick={Submit}>
          Add Post
        </button>
		<button className="btn btn-outline-danger mb-3 mx-2" onClick={()=> {
			inputStateClear();
			setText('');
			props.editPost('');
		}}>
          Clear
        </button>
      </div>
    </div>
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

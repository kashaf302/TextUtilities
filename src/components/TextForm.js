import React, { useState } from "react";

export default function TextForm(props) {
  //convert text to uppercase
  const onHandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "Success")
  };
  //convert text to lowercase
  const onHandleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "Success")

  };
  const onHandleChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  //clear all text
  const textClear = () => {
    setText("");
  };
  //copy text to clipboard
  const copyText = () => {
    var text = document.getElementById("myTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard" , "Success")

  };
  //remove extra  spaces and replace them with single space instaed
  const removeSpaces = () => {
    var mytext = text.replace(/\s+/g, " ").trim();
    setText(mytext);
  };
  const [text, setText] = useState("");
  //style added to text area
 const myStyle={
    backgroundColor: props.mode === "dark" ? "grey" : "white",
    color: props.mode === "dark" ? "white" : "black",
    border : props.mode==='dark' ? '1px solid white' : '1px solid black'
  }

  return (
    <div>
      <div className="my-5">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>
        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={onHandleChange}
          style={myStyle}
          id="myTextArea"
          rows="5"
        ></textarea>
        <button className="btn btn-success my-3 mx-1" onClick={onHandleUpClick} >
          convert to uppercase{" "}
        </button>
        <button className="btn btn-success my-3 mx-1" onClick={onHandleLoClick}>
          convert to lowercase{" "}
        </button>
        <button className="btn btn-success my-3 mx-1" onClick={textClear}>
          clear text{" "}
        </button>
        <button className="btn btn-success my-3 mx-1" onClick={copyText}>
          copy text{" "}
        </button>
        <button className="btn btn-success my-3 mx-1" onClick={removeSpaces}>
          remove extra spaces{" "}
        </button>
      </div>
      <div
        className={` container my-2 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>It takes {0.008 * text.split(" ").length}s to read this text</p>
        <h3>{text.length===0 ?"" : 'Preview'}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

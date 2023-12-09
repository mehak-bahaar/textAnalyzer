import React, { useState } from 'react'
import ("./TextForm.css")
const TextForm = (props) => {
    const [text, setText] = useState("");
    const [showCopiedContainer, setShowCopiedContainer] = useState(false);
    const handleUpClick = (e) => {
        // e.preventDefault()
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = (e) => {
        e.preventDefault()
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleExtraSpaces = (e) => {
        e.preventDefault()
        let newText = text. split(/[  ]+/)
        setText(newText.join(" "))
    }
    const handleCopyText = (e) => {
        e.preventDefault()
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        setShowCopiedContainer(true)

        setTimeout(() => {
            setShowCopiedContainer(false);
        }, 2500);
        console.log(showCopiedContainer)
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
        setShowCopiedContainer(false);
      });
        let newText =text
        setText(newText)
    }
    const handleCapitalClick = (e) => {
        e.preventDefault()
        let newText = text.
        split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
        .join(' ')
        setText(newText)
    }
    const handleClear = (e) => {
        e.preventDefault()
        let newText = ""
        setText(newText)
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div
      className={`textForm text-${props.Mode === "dark" ? "light" : "dark"} `}
    >
      <div className="container">
        <h1 className="my-3 ">{props.heading}</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className={`form-control bg-${props.Mode} text-${
              props.Mode === "dark" ? "light" : "dark"
            } custom-outline`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Enter Text to Analyze..."
            style={{
              opacity: 0.5,
              border:
                props.Mode === "light"
                  ? "1px solid #2C2E2E"
                  : "1px solid white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.Mode === "dark" ? "outline-" : ""
          }success m-3`}
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          className={`btn btn-${
            props.Mode === "dark" ? "outline-" : ""
          }success m-3`}
          onClick={handleLowClick}
        >
          Convert To Lowercase
        </button>
        <button
          className={`btn btn-${
            props.Mode === "dark" ? "outline-" : ""
          }success m-3`}
          onClick={handleCapitalClick}
        >
          Capitalize
        </button>
        <button
          className={`btn btn-${
            props.Mode === "dark" ? "outline-" : ""
          }success m-3`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.Mode === "dark" ? "outline-" : ""
          }success m-3`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        {showCopiedContainer && <div className="copied">Copied</div>}
        <button
          className={`btn btn-${
            props.Mode === "dark" ? "outline-" : ""
          }danger m-3`}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p className="text-xl">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(".").length} sentences</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter text in above textbox to Preview"}
        </p>
      </div>
    </div>
  );
}
// TextForm.propType = {heading : PropTypes.string.isRequired}
TextForm.defaultProp = {heading: 'Enter your text here:'}

export default TextForm

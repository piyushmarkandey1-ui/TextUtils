  import React,{useState} from 'react'


  export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpcase = () => {
      const newText = text.toUpperCase()
      setText(newText)
      props.showalert("Converted to uppercase","success")
    }

    const themeStyles = {
  light: {
    backgroundColor: "white",
    color: "black"
  },
  dark: {
    backgroundColor: "#042743",
    color: "white"
  },
  red: {
    backgroundColor: "#5c0000",
    color: "white"
  },
  green: {
    backgroundColor: "#003d1f",
    color: "white"
  },
  blue: {
    backgroundColor: "#001f4d",
    color: "white"
  }
};
    const handleLowcase = () => {
      const newText = text.toLowerCase()
      setText(newText)
      props.showalert("Converted to lowercase","success")
    }

    const handleReverse= () =>{
      const newText = text.split("").reverse().join("");
      setText(newText);
      props.showalert("Text has been reversed","success")
    }

    const handleOnchange = (event) => {
      console.log("On change")
      setText(event.target.value)
    }

    // setText("New Text") right way to change the state
    // wrong way to change the state
    // text = "New Text"
    return (
      <>
        <div className="container" style={themeStyles[props.mode]}>
          <form>
            <div className="mb-3">
              <label htmlFor="myTextArea" className="form-label">{props.heading}</label>
              <textarea
                 style={{
    backgroundColor: props.mode === "light" ? "white" : themeStyles[props.mode].backgroundColor,
    color: themeStyles[props.mode].color,
    border: props.mode === "light" ? "1px solid #ced4da" : "1px solid white"
  }}
                className="form-control"
                id="myTextArea"
                rows="8"
                value={text}
                onChange={handleOnchange}
              ></textarea>
            </div>

            <button type="button" className="btn btn-primary mx-2" onClick={handleUpcase}>
              Convert to Uppercase
            </button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLowcase}>
              Convert to Lowercase
            </button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleReverse}>
              Reverse Text
            </button>
          </form>
        </div>
        <div className="container my-3" style={{
          color: props.mode === "dark" ? "white" : "black"
        }}>
          <h3>Your text summary</h3>
          <p>{text.split(" ").filter((word) => word.length !== 0).length} words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").filter((word) => word.length !== 0).length} minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
        </div>
      </>
    )
  }

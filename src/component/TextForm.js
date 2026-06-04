import React,{useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpcase = () => {
    const newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowcase = () => {
    const newText = text.toLowerCase()
    setText(newText)
  }

  const handleReverse= () =>{
    const newText = text.split("").reverse().join("");
    setText(newText);
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
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="myTextArea" className="form-label">{props.heading}</label>
            <textarea
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
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

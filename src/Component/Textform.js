import React, { useState } from 'react'

export default function Textform(props) {
    const HandleUpClick = () => {
        console.log("Convert to Uppercase Clicked")
        let upcase = text.toUpperCase()
        setText(upcase)
    }

    const HandleLoClick = () => {
        console.log("Convert to Lowercase Clicked")
        let locase = text.toLowerCase()
        setText(locase)
    }

    const Copybtn = () => {
        let cpy = document.getElementById('mybox')
        cpy.select()
        navigator.clipboard.writeText(cpy.value)
    }

    const HandleOnChange = (event) => {
        console.log("On Changed")
        setText(event.target.value)
    }

    const CountText = () => {
        let count = text.split(" ").length
        return count - 1
    }

    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const ClearAll = () => {
        setText("")
    }

    const Font = () => {
        let ChangeFont = document.getElementById('mybox');
        if (ChangeFont.style.fontFamily === "none") {
            ChangeFont.style.fontFamily = "monospace"
        }
        else {
            ChangeFont.style.fontFamily = "none"
        }
    }

    const [text, setText] = useState('');

    return (<>
        <div className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h4>{props.heading}</h4>
        </div>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={HandleOnChange} style={{color: props.mode === 'dark' ? 'white' : 'black',backgroundColor: props.mode === 'light' ? 'white' : 'rgb(64, 64, 64)', border: props.mode === 'light' ? '' : '3px Solid blue' }} id="mybox" placeholder='Write Here' rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Copybtn}>To Copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-2" onClick={ClearAll}>Clear All</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Font}>Change Font</button>

        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="my-4">
                <h5>{props.heading2}</h5>
            </div>
            {/* <p> {text.split(" ").length-1} Words and {text.length} Characters in Text box</p> */}
            <p> {CountText()} Words and {text.length} Characters in Text box</p>
            <p>{0.008 * text.split(" ").length} Minutes to read this Textbox</p>

            <div className="my-4">
                <h5>{props.heading3}</h5>
            </div>
            <p>{text.length>0?text:"Enter Something To Preview"}</p>
        </div>
    </>
    )
}

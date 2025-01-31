import React, {useState} from 'react'

const Text = (props) => {

    const [text, setText] = useState("");

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    const handleUp = () => {
        const newText = text;
        if(newText === text.toLocaleLowerCase()) {

            setText(newText.toLocaleUpperCase());
            props.showAlert("convert to Uppercase", "success");
        }
        else{
            setText(newText.toLocaleLowerCase());
            props.showAlert("convert to Lowercase", "success");
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const clearText = () =>{
        const text = ""
        setText(text);
        props.showAlert("Clear the Text", "success");
    }
    const copyText = () =>{
        let text = document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy the clipboard", "success");
    }
    const extraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space will be remove", "success");
    }
    return (
        <div >
            <div className='container' style={{color: props.mode === 'light'? 'black':'white'}}>
            <h1>Enter here</h1>
                <div className="mb-3">
                    <textarea class="form-control" value={text} id='myBox' onChange={handleChange} rows="8" style={{backgroundColor:props.mode ==='light'? 'white':'black', color: props.mode === 'light'? 'black':'white'}}></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUp}>convert</button>
                <button className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={extraSpace}>Remove Extra Space</button>
                <h2>Your Text Summary</h2>
                <p> {wordCount} Words and {text.trim().length} Character</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text here"}</p>
            </div>
        </div>
    )
}

export default Text
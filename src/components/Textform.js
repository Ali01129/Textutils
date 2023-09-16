import React, {useState} from 'react'


export default function Textform(props) {
    const uppercase=()=>{
        console.log("upper case clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Uppercase!","success");
    }
    const lowercase=()=>{
        console.log("lower case clicked");
        let newtext2=text.toLowerCase();
        setText(newtext2);
        props.showalert("Converted to Lowercase!","success");
    }
    const clear=()=>{
        console.log("clear clicked");
        let t1="";
        setText(t1);
        props.showalert("Text Cleared!","success");
    }
    const copy=()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Copied to Clipboard!","success");
    }
    const handlechange=(event)=>{
        console.log("on change clicked:");
        setText(event.target.value);
    }
    const [text, setText]= useState("Enter text here:");
  return (
    <>
        <div className='container1'style={{color: props.mode==='light'?'black':'white'}}>
            <h4 className='container my-2'>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='light'?'black':'white'}} onChange={handlechange} id="text-box" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={uppercase}>Convert to UpperCase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={lowercase}>Convert to lowerCase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={copy}>Copy to Clipboard</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={clear}>Clear</button>
        </div>
        <div className="container2 my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words / <b>{text.length - (text.split(" ").length-1)}</b> characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
//btn btn-outline-success green
//danger red
//primary blue
import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
export default function About(props) {
  // console.log('props', location.state.string)
    const [myStyle, setMyStyle]=useState({
        color:'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText]=useState("Enable Dark Mode" )
    const toggleMode=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor: 'black',
                border: '1px solid white'   
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'   
            })  
            setBtnText("Enable Dark Mode")
        }   
    }
    const location = useLocation();
  return (
    <div className='container' style={myStyle}>
      {location.state?.string? <h1>{location.state.string}</h1>:<h1>I cam from navbar</h1>}
        <h1>About Ussss</h1>
    <div className="accordion" id="accordionExample" >
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          style={myStyle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Accordion Item #1
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
          <strong>This is the first item's accordion body.</strong> It is shown by
          default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify
          any of this with custom CSS or overriding our default variables. It's
          also worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          style={myStyle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Accordion Item #2
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
          <strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit
          overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          style={myStyle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Accordion Item #3
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that
          we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit
          overflow.
        </div>
      </div>
    </div>
  </div>
  <div className="container">
   <button className='btn btn-primary my-3' onClick={toggleMode}>{btnText}</button>
 </div>
  </div>

  )
}

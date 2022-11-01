import React from "react";


const Inputs = (props) => {

  //const [vis, setter] = useState(false);
 

  function MouseOver(event) {
    //setter(true)
    event.target.querySelector('span').style.visibility = 'visible'
  }
  function MouseOut(event) {
    event.preventDefault()
    event.target.querySelector('span').style.visibility = 'hidden'
  }

  return (
    <li className="d-flex flex-row justify-spacing-between" onMouseOver={MouseOver} onMouseOut={MouseOut} >
      {props.task}
      <span  style={{visibility: 'hidden'}} 
        type="button"
        onClick={() => {
          props.onDelete(props.id);
        }}
        className="delete-button"
      >
        <i className="fas fa-times"></i>
      </span>
    </li>
  );
};

export default Inputs;

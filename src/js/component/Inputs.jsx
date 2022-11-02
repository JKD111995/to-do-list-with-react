import React from "react";


const Inputs = (props) => {
 

  // function MouseOver(event) {
  //   event.target.querySelector('span').style.visibility = 'visible'
  // }
  // function MouseOut(event) {
  //   event.preventDefault()
  //   event.target.querySelector('span').style.visibility = 'hidden'
  // }

  // style={{visibility: 'hidden'}} 

  return (
    <li className="d-flex flex-row justify-spacing-between" >
      {props.task}
      <span  
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

import React from 'react'
const Card = props => {
  return(
    <div className="card col-md-3">
      <div className="card-body">
      <h5 className="card-title">{props.fname} {props.lname}</h5>
        <hr></hr>
      <p className="card-text">Department: {props.department}</p>
      <p className="card-text">Title: {props.title}</p>
      </div>
    </div>
  )
}

export default Card
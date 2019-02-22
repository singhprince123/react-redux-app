import React from 'react'
import './Modal.css'

export default function Modal(props) {
    console.log("in modal", props)
  return (
    <div className="custom-modal">
      <header className="modal__header text-center">{props.title}</header>
      <section className="modal__content ml-5">{props.children}</section>
      <section className="modal__actions">
        {props.canCancel && <button className="btn btn-danger" onClick={props.onCancelModal}>Cancel Adding</button>}
       
      </section>
    </div>
  )
}

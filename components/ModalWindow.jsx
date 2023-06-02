"use client";
import clsx from 'clsx'
import React from 'react'
import ContactForm from './ContactForm'

const ModalWindow = ({ showModal, setShowModal, toggleModal }) => {
    
    return (
        <div className={clsx("backdrop", !showModal && "is-hidden")} data-modal>
            <div className="modal">
                <button onClick={() => toggleModal()}className="modal__button-close" data-modal-close>
                    <svg className="modal__close-icon" width="11px" height="11px">
                        <use href="./images/icons.svg#icon-close"></use>
                    </svg>
                </button>
                <p className="modal__title">Залиште свої дані, ми вам передзвонимо</p>
                <ContactForm />
            </div>
        </div>
    )
}

export default ModalWindow
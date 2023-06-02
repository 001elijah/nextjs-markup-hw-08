import React from 'react'

const ContactForm = () => {
  return (
    <form className="modal__form" action="=#">
        <div className="modal__wrap" role="group">
            <label className="modal__form-label" htmlFor="name">Ім'я</label>
                <div className="modal__form-wrap">
                    <input className="modal__form-input" type="text" name="name" id="name" placeholder=" " />
                    <svg className="modal__form-icon" width="12" height="12">
                        <use href="./images/icons.svg#icon-person"></use>
                    </svg>
                </div>
            <label className="modal__form-label" htmlFor="tel">Телефон</label>
                <div className="modal__form-wrap">
                    <input className="modal__form-input" type="tel" name="tel" id="tel" placeholder=" " />                        
                    <svg className="modal__form-icon" width="14" height="14">
                        <use href="./images/icons.svg#icon-tel"></use>
                    </svg>
                </div>
            <label className="modal__form-label" htmlFor="mail">Пошта</label>
                <div className="modal__form-wrap">
                    <input className="modal__form-input" type="text" name="mail" id="mail" placeholder=" " />
                    <svg className="modal__form-icon" width="16" height="12">
                        <use href="./images/icons.svg#icon-modal-envelope"></use>
                    </svg>
                </div>
            <label className="modal__form-label" htmlFor="comment">Коментар</label>
                <div className="modal__form-wrap modal__form-field--last">
                    <textarea className="modal__form-comment" name="comment" id="comment" placeholder="Введіть текст"></textarea>
                </div>
            <label className="modal__form-policy" htmlFor="policy">
                <input className="modal__form-checkbox" type="checkbox" name="policy" id="policy" />
                <span className="modal__form-checkbox-icon"></span>
                <span className="modal__form-policy-text">
                    Погоджуюся з розсилкою та приймаю <a className="modal__form-policy-link" href="">Умови договору</a>
                </span>
            </label>
        </div>
        <button className="modal__button" type="submit">Відправити</button>
    </form>
  )
}

export default ContactForm
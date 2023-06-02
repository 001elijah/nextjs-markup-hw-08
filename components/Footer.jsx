import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__wrap">
            <div className="footer__contacts">
                <Link href="/" className="footer__logo">
                    <span className="footer__logo--blue">Web</span><span className="footer__logo--white">Studio</span>
                </Link>
                <address className="footer__address">
                    <a  className="footer__address-entry" href="https://goo.gl/maps/MC3FKYj6ZszySW3c8" target="_blank">м. Київ, пр-т Лесі Українки, 26</a>
                    <ul className="list--reset footer__contact-nav" id="contacts">
                        <li className="footer__contact-item"><a className="footer__contact" href="mailto:info@devstudio.com">info@devstudio.com</a></li>
                        <li className="footer__contact-item"><a className="footer__contact" href="tel:+380961111111">+38 096 111 11 11</a></li>
                    </ul>
                </address>
            </div>
            <div className="footer__socials">
                <p className="footer__socials-header">Приєднуйтесь</p>
                <ul className="list--reset footer__socials-list">
                    <li className="footer__social">
                        <a className="footer__social--dark" href="" aria-label="instagram">
                            <svg className="footer__social-icon" width="20px" height="20px">
                                <use href="./images/icons.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer__social">
                        <a className="footer__social--dark" href="" aria-label="twitter">
                            <svg className="footer__social-icon" width="20px" height="20px">
                                <use href="./images/icons.svg#icon-twitter"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer__social">
                        <a className="footer__social--dark" href="" aria-label="facebook">
                            <svg className="footer__social-icon" width="20px" height="20px">
                                <use href="./images/icons.svg#icon-facebook"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="footer__social">
                        <a className="footer__social--dark" href="" aria-label="linkedin">
                            <svg className="footer__social-icon" width="20px" height="20px">
                                <use href="./images/icons.svg#icon-linkedin"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__subscribtion">
                <p className="footer__subscribtion-header">Підпишіться на розсилку</p>
                <form className="footer__form--wrap" name="subscription-form" autoComplete="on" noValidate>
                    <label className="footer__label--stylish">
                        <input className="footer__input--stylish" type="email" name="email" placeholder="E-mail" />
                    </label>
                    <button className="footer__subscribe-button" type="submit">
                        Підписатися
                        <svg className="footer__subscribe-button-icon" width="24px" height="24px">
                            <use href="./images/icons.svg#icon-send"></use>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer
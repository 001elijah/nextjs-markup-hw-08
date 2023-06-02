import Link from 'next/link';
const HeaderContacts = () => {
  return (
    <ul className="list--reset header__contact-nav header__contact-wrap">
        <li className="header__contact-item">
            <Link className="header__contact-link" href="mailto:info@devstudio.com">
                <svg className="header__icon-envelope">
                    <use href="./images/icons.svg#icon-envelope">
                    </use>
                </svg>
                info@devstudio.com
            </Link>
        </li>
        <li className="header__contact-item">
            <Link className="header__contact-link" href="tel:+380961111111">
                <svg className="header__icon-smartphone">
                    <use href="./images/icons.svg#icon-smartphone">
                    </use>
                </svg>
                +38 096 111 11 11
            </Link>
        </li>
    </ul>
  )
}

export default HeaderContacts
import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

const MobNav = ({ showMenu, toggleMenu }) => {
    const router = usePathname();
    return (
        <div className={clsx("mob-menu", !showMenu && "is-hidden")} data-menu>
            <button onClick={() => toggleMenu()} className="menu-close" type="button" data-menu-close>
                <svg className="menu-close__icon" width="19" height="19">
                    <use href="./images/icons.svg#icon-close"></use>
                </svg>
            </button>
            <div className="menu-container">
                <div className="menu-container--top">
                    <ul className="list--reset mob-menu__nav">
                        <li className="mob-menu__nav-item">
                            <Link onClick={() => toggleMenu()} className={clsx("mob-menu__nav-link", router === "/" && "mob-menu__page--current")} href="/">
                                Студія
                            </Link>
                        </li>
                        <li className="mob-menu__nav-item">
                            <Link onClick={() => toggleMenu()} className={clsx("mob-menu__nav-link", router === "/portfolio" && "mob-menu__page--current")} href="/portfolio">
                                Портфоліо
                            </Link>
                        </li>
                        <li className="mob-menu__nav-item">
                            <a onClick={() => toggleMenu()} className="mob-menu__nav-link" href="#contacts" data-menu-close>
                                Контакти
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu-container--bottom">
                    <ul className="list--reset mob-menu__contact-nav mob-menu__contact-wrap">
                        <li className="mob-menu__contact-item">
                            <Link className="mob-menu__contact-tel" href="tel:+380961111111">
                                +38 096 111 11 11
                            </Link>
                        </li>
                        <li className="mob-menu__contact-item">
                            <Link className="mob-menu__contact-email" href="mailto:info@devstudio.com">
                                info@devstudio.com
                            </Link>
                        </li>
                    </ul>
                    <ul className="list--reset mob-socials">
                        <li className="mob-socials__social">
                            <a className="mob-socials__social--accent" href="" aria-label="instagram">
                                Instagram
                            </a>
                        </li>
                        <li className="mob-socials__social">
                            <a className="mob-socials__social--accent" href="" aria-label="twitter">
                                Twitter
                            </a>
                        </li>
                        <li className="mob-socials__social">
                            <a className="mob-socials__social--accent" href="" aria-label="facebook">
                                Facebook
                            </a>
                        </li>
                        <li className="mob-socials__social">
                            <a className="mob-socials__social--accent" href="" aria-label="linkedin">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobNav
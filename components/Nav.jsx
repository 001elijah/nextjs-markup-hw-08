"use client";
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';
const Nav = () => {
    const router = usePathname();
    return (
        <nav className="header__navigation">
            <Link className="header__logo" href="/">
                <span className="header__logo--blue">Web</span><span className="header__logo--dark">Studio</span>
            </Link>
            <ul className="list--reset header__nav">
                <li className="header__nav-item">
                    <Link className={clsx("header__nav-link", router === "/" && "header__page--current")} href="/">
                        Студія
                    </Link>
                </li>
                <li className="header__nav-item">
                    <Link className={clsx("header__nav-link", router === "/portfolio" && "header__page--current")} href="/portfolio">
                        Портфоліо
                    </Link>
                </li>
                <li className="header__nav-item">
                    <a className="header__nav-link" href="#contacts">
                        Контакти
                    </a>
                </li>
            </ul>
        </nav>
  )
}

export default Nav
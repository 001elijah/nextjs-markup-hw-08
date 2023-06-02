'use client';
import { useState } from "react"
import HeaderContacts from "./HeaderContacts"
import MenuBtn from "./MenuBtn"
import MobNav from "./MobNav"
import Nav from "./Nav"

const Header = ({showMenu, setShowMenu}) => {
    const toggleMenu = () => {
        if (!showMenu) {
            setShowMenu(true);
            return;
        }
        setShowMenu(false);
    }
  return (
      <div className="header">
          <div className="container">
              <div className="header__wrap">
                  <Nav />
                  <HeaderContacts />
                  <MenuBtn toggleMenu={toggleMenu} />
              </div>
          </div>
          <MobNav showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
  )
}

export default Header
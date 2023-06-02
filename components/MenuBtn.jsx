const MenuBtn = ({ toggleMenu }) => {
  return (
    <button onClick={() => toggleMenu()} className="menu-open" type="button" data-menu-open>
        <svg className="menu-open__icon" width="40" height="40">
            <use href="./images/icons.svg#icon-menu"></use>
        </svg>
    </button>
  )
}

export default MenuBtn
import React, { useRef } from "react";
import { Search, PersonCircle, ClipboardPlusFill, House, Cart3, Bookmarks, EggFried } from "react-bootstrap-icons"
import { IPropsHeader, IPropsPageSelection } from "../../utils/interfaces";
import Routes from "../../utils/routes";
import { Link } from "react-router-dom";
import { PageSelection } from "../../utils/enums";
import HeaderNavigationItem from "./HeaderNavigationItem";
import "./Header.scss";
import HeaderAppTitle from "./HeaderAppTitle";
import HeaderBackIcon from "./HeaderBackIcon";

interface IProps extends IPropsHeader, IPropsPageSelection {}
const Header: React.FC<IProps> = (props) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const getSelectionClassName = (selectedItem: PageSelection) => {
        return props.pageSelection === selectedItem ? "header__navigation__item active" : "header__navigation__item";
    };

    const isActivePage = (pageSelection: PageSelection) =>
            props.pageSelection === pageSelection;

    return (
        <header className="header">
            {props.showBackButton && <HeaderBackIcon />}
            <HeaderAppTitle />
            <h1 className="header__title app">{props.headerText}</h1>
            <div className="header__search" onClick={() => searchInputRef.current!.focus()}> {/* source out into a generic search input */}
                <Search className="header__search__icon" />
                <input
                    onFocus={() => document.getElementById("std-overlay")!.classList.add("active")} /** in helper auslafern! */
                    onBlur={() => document.getElementById("std-overlay")!.classList.remove("active")} /** in helper auslafern! */
                    className="header__search__input"
                    type="text"
                    placeholder="Search"
                    ref={searchInputRef}
                />
                <ul className="header__search__input-dropdown">

                </ul>
            </div>
            <nav className="header__navigation">
                <Link
                    className={getSelectionClassName(PageSelection.CREATEPAGE) + " main-icon"}
                    to={Routes.CREATEPAGE}
                >
                    <ClipboardPlusFill className="header__navigation__main-icon" />
                </Link>
                <HeaderNavigationItem
                    IconComponent={House}
                    urlRoute={Routes.DASHBOARDPAGE}
                    isActive={isActivePage(PageSelection.DASHBOARDPAGE)}
                    itemText="Dashboard"
                />
                <HeaderNavigationItem
                    IconComponent={EggFried}
                    urlRoute={Routes.LISTOVERVIEWPAGE}
                    isActive={isActivePage(PageSelection.LISTOVERVIEWPAGE)}
                    itemText="Suche"
                />
                <HeaderNavigationItem
                    IconComponent={Bookmarks}
                    urlRoute={Routes.FAVOURITECOLLECTIONPAGE}
                    isActive={isActivePage(PageSelection.FAVOURITECOLLECTIONPAGE)}
                    itemText="Collections"
                />
                <HeaderNavigationItem
                    IconComponent={Cart3}
                    urlRoute={Routes.CARTPAGE}
                    isActive={isActivePage(PageSelection.CARTPAGE)}
                    itemText="Einkauf"
                />
                <HeaderNavigationItem
                    IconComponent={PersonCircle}
                    urlRoute={Routes.USERPAGE}
                    isActive={isActivePage(PageSelection.USERPAGE)}
                    itemText="Benutzer"
                />
            </nav>
            <Link className="header__user-icon" to={Routes.USERPAGE}>
                <PersonCircle />
            </Link>
        </header>
    );
}
 
export default Header;
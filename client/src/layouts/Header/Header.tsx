import React from "react";
import { Search, ChevronLeft, PersonCircle, ClipboardPlusFill, House, Cart3, Bookmarks, EggFried, Fire } from "react-bootstrap-icons"
import { IPropsHeader, IPropsPageSelection } from "../../utils/interfaces";
import Routes from "../../utils/routes";
import { Link } from "react-router-dom";
import { PageSelection } from "../../utils/enums";
import "./Header.scss";

interface IProps extends IPropsHeader, IPropsPageSelection {}
const Header: React.FC<IProps> = (props) => {

    const getSelectionClassName = (selectedItem: PageSelection) => {
        return props.pageSelection === selectedItem ? "header__navigation__item active" : "header__navigation__item";
    };

    return (
        <header className="header">
            {props.showBackButton ?
                <div className="header__back-icon">
                    <ChevronLeft
                    onClick={() => window.history.back()}
                    />
                </div> :
                <div className="header__back-icon"></div>
            }
            <Link to={Routes.DASHBOARDPAGE} className="header__title desktop">
                <Fire />
                <h1 className="header__title__app-name">WeeklyChef</h1>
            </Link>
            <h1 className="header__title app">{props.headerText}</h1>
            <div className="header__search">
                <Search className="header__search__icon" />
                <input className="header__search__input" type="text" placeholder="Search" />
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
                <Link
                    className={getSelectionClassName(PageSelection.DASHBOARDPAGE)}
                    to={Routes.DASHBOARDPAGE}
                >
                    <House className="header__navigation__item__icon" />
                    <p className="header__navigation__item__text">Dashboard</p>
                </Link>
                <Link
                    className={getSelectionClassName(PageSelection.LISTOVERVIEWPAGE)}
                    to={Routes.LISTOVERVIEWPAGE}
                >
                    <EggFried className="header__navigation__item__icon" />
                    <p className="header__navigation__item__text">Suche</p>
                </Link>
                <Link
                    className={getSelectionClassName(PageSelection.FAVOURITECOLLECTIONPAGE)}
                    to={Routes.FAVOURITECOLLECTIONPAGE}
                >
                    <Bookmarks className="header__navigation__item__icon" />
                    <p className="header__navigation__item__text">Collections</p>
                </Link>
                <Link
                    className={getSelectionClassName(PageSelection.CARTPAGE)}
                    to={Routes.CARTPAGE}
                >
                    <Cart3 className="header__navigation__item__icon" />
                    <p className="header__navigation__item__text">Einkauf</p>
                </Link>
                <Link
                    className={getSelectionClassName(PageSelection.USERPAGE)}
                    to={Routes.USERPAGE}
                >
                    <PersonCircle className="header__navigation__item__icon" />
                    <p className="header__navigation__item__text">Benutzer</p>
                </Link>
            </nav>
            <Link className="header__user-icon" to={Routes.USERPAGE}>
                <PersonCircle />
            </Link>
        </header>
    );
}
 
export default Header;
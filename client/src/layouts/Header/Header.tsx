import React from "react";
import { Search, PersonCircle, ClipboardPlusFill, House, Cart3, Bookmarks, EggFried } from "react-bootstrap-icons"
import { IPropsHeader, IPropsPageSelection } from "../../utils/interfaces";
import Routes from "../../utils/routes";
import { Link } from "react-router-dom";
import { PageSelection } from "../../utils/enums";
import HeaderNavigationItem from "./HeaderNavigationItem";
import HeaderBackIcon, { HeaderBackIconType} from "./HeaderBackIcon";
import "./Header.scss";
import HeaderAppTitle from "./HeaderAppTitle";

interface IProps extends IPropsHeader, IPropsPageSelection {}
const Header: React.FC<IProps> = (props) => {

    const getSelectionClassName = (selectedItem: PageSelection) => {
        return props.pageSelection === selectedItem ? "header__navigation__item active" : "header__navigation__item";
    };

    const isActivePage = (pageSelection: PageSelection) =>
            props.pageSelection === pageSelection;

    return (
        <header className="header">
            <HeaderBackIcon showOption={props.showBackButton ? HeaderBackIconType.SHOW : HeaderBackIconType.HIDE_WITH_HIDDEN_ELEMENT}/>
            <HeaderAppTitle />
            <h1 className="header__title app">{props.headerText}</h1>
            <div className="header__search"> {/* source out into a generic search input */}
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
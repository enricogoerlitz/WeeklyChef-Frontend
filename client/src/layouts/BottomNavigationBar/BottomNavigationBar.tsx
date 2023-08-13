import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../utils/routes";
import { PageSelection } from "../../utils/enums";
import { IPropsPageSelection } from "../../utils/interfaces";
import { isIOSDevice } from "../../utils/helper"
import { House, EggFried, Cart3, ClipboardPlusFill, Bookmarks } from "react-bootstrap-icons";
import "./BottomNavigationBar.scss";

interface IProps extends IPropsPageSelection {}
const BottomNavigationBar: React.FC<IProps> = (props) => {

    const getNavClassName = () => {
        const isIOS = isIOSDevice();
        let navClassName = "bottom-navigation-ctn";
        navClassName += isIOS ? " ios-bottom-nav" : "";
        return navClassName;
    }

    const getSelectionClassName = (selectedItem: PageSelection) => {
        return props.pageSelection === selectedItem ? "bottom-navigation-ctn__item active" : "bottom-navigation-ctn__item";
    };

    return (
        <nav className={getNavClassName()}>
            <Link
                className={getSelectionClassName(PageSelection.DASHBOARDPAGE)}
                to={Routes.DASHBOARDPAGE}
            >
                <House className="bottom-navigation-ctn__item__icon" />
                <p className="bottom-navigation-ctn__item__text">Dashboard</p>
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.LISTOVERVIEWPAGE)}
                to={Routes.LISTOVERVIEWPAGE}
            >
                <EggFried className="bottom-navigation-ctn__item__icon" />
                <p className="bottom-navigation-ctn__item__text">Suche</p>
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.CREATEPAGE) + " main-item"}
                to={Routes.CREATEPAGE}
            >
                <ClipboardPlusFill className="bottom-navigation-ctn__main-icon" />
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.FAVOURITECOLLECTIONPAGE)}
                to={Routes.FAVOURITECOLLECTIONPAGE}
            >
                <Bookmarks className="bottom-navigation-ctn__item__icon" />
                <p className="bottom-navigation-ctn__item__text">Collections</p>
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.CARTPAGE)}
                to={Routes.CARTPAGE}
            >
                <Cart3 className="bottom-navigation-ctn__item__icon" />
                <p className="bottom-navigation-ctn__item__text">Einkauf</p>
            </Link>
        </nav>
    );
};

export default BottomNavigationBar;

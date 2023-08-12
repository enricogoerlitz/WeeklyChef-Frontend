import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../utils/routes";
import { PageSelection } from "../../utils/enums";
import { IPropsPageSelection } from "../../utils/interfaces";
import { House, EggFried, Cart3, ClipboardPlusFill, Bookmarks } from "react-bootstrap-icons";
import "./BottomNavigationBar.scss";

interface IProps extends IPropsPageSelection {}
const BottomNavigationBar: React.FC<IProps> = (props) => {

    const getSelectionClassName = (selectedItem: PageSelection) => {
        return props.pageSelection === selectedItem ? "bottom-navigation-ctn__item active" : "bottom-navigation-ctn__item";
    };

    return (
        <nav className="bottom-navigation-ctn">
            <Link
                className={getSelectionClassName(PageSelection.DASHBOARDPAGE)}
                to={Routes.DASHBOARDPAGE}
            >
                
                <House />
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.LISTOVERVIEWPAGE)}
                to={Routes.LISTOVERVIEWPAGE}
            >
                <EggFried />
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.CREATEPAGE) + " main-icon"}
                to={Routes.CREATEPAGE}
            >
                <ClipboardPlusFill />
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.FAVOURITECOLLECTIONPAGE)}
                to={Routes.FAVOURITECOLLECTIONPAGE}
            >
                <Bookmarks />
            </Link>
            <Link
                className={getSelectionClassName(PageSelection.CARTPAGE)}
                to={Routes.CARTPAGE}
            >
                <Cart3 />
            </Link>
        </nav>
    );
};

export default BottomNavigationBar;

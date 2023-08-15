import React from "react";
import Routes from "../../utils/routes";
import { PageSelection } from "../../utils/enums";
import { IPropsPageSelection } from "../../utils/interfaces";
import { isIOSDevice } from "../../utils/helper"
import { House, EggFried, Cart3, ClipboardPlusFill, Bookmarks } from "react-bootstrap-icons";
import BottomNavigationItem from "./BottomNavigationItem";
import "./BottomNavigationBar.scss";


interface IProps extends IPropsPageSelection {}
const BottomNavigationBar: React.FC<IProps> = (props) => {

    const getNavClassName = () => {
        const isIOS = isIOSDevice();
        let navClassName = "bottom-navigation-ctn";
        navClassName += isIOS ? " ios-bottom-nav" : "";
        return navClassName;
    }

    const isActivePage = (pageSelection: PageSelection) =>
            props.pageSelection === pageSelection;

    return (
        <nav className={getNavClassName()}>
            <BottomNavigationItem
                IconComponent={House}
                urlRoute={Routes.DASHBOARDPAGE}
                itemText="Dashboard"
                isActive={isActivePage(PageSelection.DASHBOARDPAGE)}
            />
            <BottomNavigationItem
                IconComponent={EggFried}
                urlRoute={Routes.LISTOVERVIEWPAGE}
                itemText="Suche"
                isActive={isActivePage(PageSelection.LISTOVERVIEWPAGE)}
            />
            <BottomNavigationItem
                IconComponent={ClipboardPlusFill}
                urlRoute={Routes.CREATEPAGE}
                isActive={isActivePage(PageSelection.CREATEPAGE)}
                isMainItem={true}
            />
            <BottomNavigationItem
                IconComponent={Bookmarks}
                urlRoute={Routes.FAVOURITECOLLECTIONPAGE}
                itemText="Collections"
                isActive={isActivePage(PageSelection.FAVOURITECOLLECTIONPAGE)}
            />
            <BottomNavigationItem
                IconComponent={Cart3}
                urlRoute={Routes.CARTPAGE}
                itemText="Einkauf"
                isActive={isActivePage(PageSelection.CARTPAGE)}
            />
        </nav>
    );
};

export default BottomNavigationBar;

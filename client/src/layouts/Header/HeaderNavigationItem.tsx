import React from "react";
import { Link } from "react-router-dom";

interface IProps {
    urlRoute: string;
    itemText: string;
    IconComponent: React.FC<any>;
    isActive: boolean;
}
const HeaderNavigationItem: React.FC<IProps> = (props) => {

    const getItemClassName = () => {
        return props.isActive ?
                "header__navigation__item active" :
                "header__navigation__item";
    };

    return (
        <Link
            className={getItemClassName()}
            to={props.urlRoute}
        >
            <props.IconComponent className="header__navigation__item__icon" />
            <p className="header__navigation__item__text">{props.itemText}</p>
        </Link>
    )
}

export default HeaderNavigationItem;
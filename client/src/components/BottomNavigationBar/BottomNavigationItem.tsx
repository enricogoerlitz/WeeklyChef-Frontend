import React from "react";
import { Link } from "react-router-dom";


interface IProps {
    urlRoute: string;
    isMainItem?: boolean;
    itemText?: string;
    IconComponent: React.FC<any>;
    isActive: boolean;
}
const BottomNavigationItem: React.FC<IProps> = (props) => {

    const getItemClassName = () => {
        let itemClassName = "bottom-navigation-ctn__item";
        itemClassName += props.isActive ? " active" : ""
        itemClassName += props.isMainItem ? " main-item" : ""
        return itemClassName;
    };

    const getIconClassName = () => {
        return props.isMainItem ?
                "bottom-navigation-ctn__main__icon" :
                "bottom-navigation-ctn__item__icon"
    }

    return (
        <Link
            className={getItemClassName()}
            to={props.urlRoute}
        >
            <props.IconComponent className={getIconClassName()} />
            {props.itemText && 
                <p className="bottom-navigation-ctn__item__text">
                    {props.itemText}
                </p>
            }
        </Link>
    );
}

export default BottomNavigationItem;

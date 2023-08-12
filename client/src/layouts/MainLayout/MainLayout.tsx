import React from "react";
import Header from "../Header/Header"
import { IBaseProps, IPropsPageSelection } from "../../utils/interfaces";
import BottomNavigationBar from "../BottomNavigationBar/BottomNavigationBar";
import "./MainLayout.scss"


export const LeftSide: React.FC<IBaseProps> = (props) => {
    return <section className="main-layout-container__left-side">{props.children}</section>;
};

export const Content: React.FC<IBaseProps> = (props) => {
    return <main className="main-layout-container__content">{props.children}</main>;
};

export const RightSide: React.FC<IBaseProps> = (props) => {
    return <section className="main-layout-container__right-side">{props.children}</section>;
};

type MainLayoutType = {
    LeftSide: typeof LeftSide;
    Content: typeof Content;
    RightSide: typeof RightSide;
}

interface IProps extends IBaseProps, IPropsPageSelection {}
const MainLayout: React.FC<IProps> & MainLayoutType = (props) => {
    return (
        <div className="main-layout-container">
            <Header />
            {props.children}
            <BottomNavigationBar pageSelection={props.pageSelection} />
        </div>
    );
};

MainLayout.LeftSide = LeftSide;
MainLayout.RightSide = RightSide;
MainLayout.Content = Content;

export default MainLayout;

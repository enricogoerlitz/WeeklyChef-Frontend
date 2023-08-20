import React from "react";
import { IBaseProps } from "../../../utils/interfaces";
import "./DashboardCarousel.scss";
import { Link } from "react-router-dom";

interface IProps extends IBaseProps {
    headerText: string,
    headerShowMoreLink?: string,
    headerClassName?: string
}
const Carousel: React.FC<IProps> = (props) => {
    const getHeaderClassName = () => {
        const BASE_CLASSNAME = "dashboard__carousel__header"
        return props.headerClassName ?
                `${BASE_CLASSNAME} ${props.headerClassName}` :
                BASE_CLASSNAME
    }

    const getSectionClassName = () => {
        const BASE_CLASSNAME = "dashboard__carousel-container"
        return props.className ?
                `${BASE_CLASSNAME} ${props.className}` :
                BASE_CLASSNAME
    }

    return (
        <>
            <div className={getHeaderClassName()}>
                <p className="dashboard__carousel__header__text">{props.headerText}</p>
                {props.headerShowMoreLink && <Link to={props.headerShowMoreLink} className="dashboard__carousel__header__link">Mehr Anzeigen</Link>}
            </div>
            <section className={getSectionClassName()}>
                {props.children}
            </section>
        </>
    )
}

export default Carousel
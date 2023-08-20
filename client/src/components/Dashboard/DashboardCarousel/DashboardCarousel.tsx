import React from "react";
import { IBaseProps } from "../../../utils/interfaces";
import "./DashboardCarousel.scss";
import { Link } from "react-router-dom";

interface IProps extends IBaseProps {
    headerText: string,
    headerShowMoreLink: string
}
const Carousel: React.FC<IProps> = (props) => {
    const getClassName = () => {
        const BASE_CLASSNAME = "dashboard__carousel-container"
        return props.className ?
                `${BASE_CLASSNAME} ${props.className}` :
                BASE_CLASSNAME
    }

    return (
        <>
            <div className="dashboard__carousel__header">
                <p>{props.headerText}</p>
                <Link to={props.headerShowMoreLink}>Mehr Anzeigen</Link>
            </div>
            <section className={getClassName()}>
                {props.children}
            </section>
        </>
    )
}

export default Carousel
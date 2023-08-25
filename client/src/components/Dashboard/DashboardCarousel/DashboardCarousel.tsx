import React, { useRef, useState } from "react";
import { IBaseProps } from "../../../utils/interfaces";
import "./DashboardCarousel.scss";
import { Link } from "react-router-dom";
import { isTouchDevice } from "../../../utils/helper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface IProps extends IBaseProps {
    headerText: string,
    headerShowMoreLink?: string,
    headerClassName?: string
}
const Carousel: React.FC<IProps> = (props) => {
    const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);
    const [showRightScrollButton, setShowRightScrollButton] = useState(false);

    const thisCarousel = useRef<HTMLInputElement>(null);
    const isTouchScrollableDevice = isTouchDevice();

    const getHeaderClassName = (): string => {
        const BASE_CLASSNAME = "dashboard__carousel__header"
        return props.headerClassName ?
                `${BASE_CLASSNAME} ${props.headerClassName}` :
                BASE_CLASSNAME
    }

    const getSectionClassName = (): string => {
        const BASE_CLASSNAME = "dashboard__carousel-container"
        return props.className ?
                `${BASE_CLASSNAME} ${props.className}` :
                BASE_CLASSNAME
    }

    const handleScrollButtonClick = (isScrollRight: boolean = true): void => {
        const scrollOffset = document.getElementsByClassName("recipe-container")[1]?.scrollWidth + 18;
        if(!scrollOffset) {
            return;
        }
        if(isScrollRight) {
            thisCarousel.current!.scrollLeft += scrollOffset;
            return;
        }
        thisCarousel.current!.scrollLeft -= scrollOffset;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        const maxOffset = 10;

        const isShowRightScrollButton = (
            thisCarousel.current!.scrollWidth -
            thisCarousel.current!.offsetWidth -
            thisCarousel.current!.scrollLeft) > maxOffset;
        const isShowLeftScrollButton = thisCarousel.current!.scrollLeft > maxOffset;
        
        const isMouseLeftSide = e.clientX < window.outerWidth / 2;

        if(isShowRightScrollButton && !isMouseLeftSide) {
            setShowRightScrollButton(true);
        } else if(isShowLeftScrollButton && isMouseLeftSide) {
            setShowLeftScrollButton(true);
        }

        if((isMouseLeftSide && showRightScrollButton) || !isShowRightScrollButton) {
            setShowRightScrollButton(false);
        } else if((!isMouseLeftSide && showLeftScrollButton) || !isShowLeftScrollButton) {
            setShowLeftScrollButton(false);
        }
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="dashboard__carousel"
        >
            <div className={getHeaderClassName()}>
                {!isTouchScrollableDevice && showLeftScrollButton &&
                    <button
                        onClick={() => handleScrollButtonClick(false)}
                        className="dashboard__carousel__header__nav-btn left"
                    >
                        <FaChevronLeft />
                    </button>}
                {!isTouchScrollableDevice && showRightScrollButton &&
                    <button
                        onClick={() => handleScrollButtonClick()}
                        className="dashboard__carousel__header__nav-btn right"
                    >
                        <FaChevronRight />
                    </button>}

                <h2 className="dashboard__carousel__header__text">{props.headerText}</h2>
                {props.headerShowMoreLink &&
                    <Link to={props.headerShowMoreLink} className="dashboard__carousel__header__link">Mehr Anzeigen</Link>}
            </div>
            <section
                ref={thisCarousel} className={getSectionClassName()}>
                {props.children}
            </section>
        </div>
    )
}

export default Carousel
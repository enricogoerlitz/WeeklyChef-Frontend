import React from "react";
import { ChevronLeft } from "react-bootstrap-icons"


interface IProps {}
const HeaderBackIcon: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="header__back-icon">
                <ChevronLeft
                onClick={() => window.history.back()}
                />
            </div>
        </>
        // <div className="header__back-icon"></div>
    )
}

export default HeaderBackIcon;

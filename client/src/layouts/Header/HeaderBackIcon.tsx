import React from "react";
import { ChevronLeft } from "react-bootstrap-icons"

export enum HeaderBackIconType {
    SHOW,
    HIDE,
    HIDE_WITH_HIDDEN_ELEMENT,
}

interface IProps {
    showOption: HeaderBackIconType;
}
const HeaderBackIcon: React.FC<IProps> = ({ showOption }: IProps) => {
    if(showOption === HeaderBackIconType.SHOW) {

    }
    return (
        <>
            {showOption === HeaderBackIconType.SHOW ?
                <div className="header__back-icon">
                    <ChevronLeft
                    onClick={() => window.history.back()}
                    />
                </div> :
                showOption === HeaderBackIconType.HIDE_WITH_HIDDEN_ELEMENT &&
                    <div className="header__back-icon"></div>}
        </>
        // <div className="header__back-icon"></div>
    )
}

export default HeaderBackIcon;

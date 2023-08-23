import React from "react";
import "./Overlay.scss";

interface IProps {}
const Overlay: React.FC<IProps> = (props) => {
    return (
        <div id="std-overlay" onClick={(e) => e.currentTarget.classList.remove("active")} className="overlay"></div>
    )
}

export default Overlay
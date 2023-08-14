import React from "react";
import { Fire } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Routes from "../../utils/routes";


interface IProps {}
const HeaderAppTitle: React.FC<IProps> = (props) => {
    return (
        <Link to={Routes.DASHBOARDPAGE} className="header__title desktop">
            <Fire />
            <h1 className="header__title__app-name">WeeklyChef</h1>
        </Link>
    )
}

export default HeaderAppTitle;

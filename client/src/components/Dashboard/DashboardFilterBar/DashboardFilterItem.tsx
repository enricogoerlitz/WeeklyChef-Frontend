import React from "react"
import { removeActiveClassName } from "../../../utils/helper";
import { ACTIVE_CLASSNAME } from "../../../utils/constants";



interface IProps {
    Icon: React.FC<any>,
    text: string
}
const DashboardFilterItem: React.FC<IProps> = (props) => {
    const handleFilterItemClick = (emt: React.MouseEvent<HTMLButtonElement>) => {
        // later do this with the search redux state!
        const isDisableActive = emt.currentTarget.classList.contains(ACTIVE_CLASSNAME);
        if(isDisableActive) {
            emt.currentTarget.classList.remove(ACTIVE_CLASSNAME);
            return;
        }
        removeActiveClassName("dashboard__filter__item");
        emt.currentTarget.classList.add(ACTIVE_CLASSNAME);
    }

    return (
        <button className="dashboard__filter__item" onClick={handleFilterItemClick}>
            <props.Icon className="dashboard__filter__item__icon" />
            <p className="dashboard__filter__item__text">{props.text}</p>
        </button>
    )
}

export default DashboardFilterItem;
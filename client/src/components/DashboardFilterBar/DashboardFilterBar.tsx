import React from "react"
import { IBaseProps } from "../../utils/interfaces";
import DashboardFilterItem from "./DashboardFilterItem";
import "./DashboardFilterBar.scss"


export type DashboardFilterBarType = {
    Item: typeof DashboardFilterItem
}
interface IProps extends IBaseProps {}
const DashboardFilterBar: React.FC<IProps> & DashboardFilterBarType= (props) => {
    return (
        <section className="dashboard__filter">
            {props.children}
        </section>

    )
}

DashboardFilterBar.Item = DashboardFilterItem;

export default DashboardFilterBar;

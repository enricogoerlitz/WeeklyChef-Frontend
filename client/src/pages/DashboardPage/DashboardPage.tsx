import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";
import "./DashboardPage.scss"

interface IProps {}
const DashboardPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.DASHBOARDPAGE}
            headerText="For You"
            showBackButton={true}
        >
            <MainLayout.Content>
                <div>- - - - - - - - - START - - - - - - - - </div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>- - - - - - - - - - - LAST ITEM - - - - - - - - - - - </div>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default DashboardPage;

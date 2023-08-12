import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";
import "./DashboardPage.scss"

interface IProps {}
const DashboardPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout pageSelection={PageSelection.DASHBOARDPAGE}>
            <MainLayout.Content>
                <ul>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                </ul>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default DashboardPage;

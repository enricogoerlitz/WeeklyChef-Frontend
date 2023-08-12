import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const ListOverviewPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout pageSelection={PageSelection.LISTOVERVIEWPAGE}>
            <MainLayout.Content>
                <h1>ListOverviewPage</h1>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default ListOverviewPage;

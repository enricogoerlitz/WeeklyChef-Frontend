import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const UserPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.USERPAGE}
            headerText="Benutzereinstellungen"
        >
            <MainLayout.Content>
                <h1>UserPage</h1>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default UserPage;
import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const CreatePage: React.FC<IProps> = (props) => {
    return (
        <MainLayout pageSelection={PageSelection.CREATEPAGE}>
            <MainLayout.Content>
                <h1>Create Page</h1>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default CreatePage;
import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const RecipeCreateEditPage: React.FC = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.CREATEPAGE}
            headerText="Erstellen"
        >
            <MainLayout.Content>
                <h1>RecipeCreateEditPage</h1>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default RecipeCreateEditPage;

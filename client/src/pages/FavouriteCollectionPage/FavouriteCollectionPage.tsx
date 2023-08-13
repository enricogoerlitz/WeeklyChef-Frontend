import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const FavouriteCollectionPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.FAVOURITECOLLECTIONPAGE}
            headerText="Collections"
        >
            <MainLayout.Content>
                <h1>FavouriteCollectionPage</h1>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default FavouriteCollectionPage;

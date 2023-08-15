import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const ListOverviewPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.LISTOVERVIEWPAGE}
            headerText="Suche"
        >
            <MainLayout.Content>
                <h1>ListOverviewPage</h1>

                <div>- - - - - - - - - START - - - - - - - - </div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>ListOverviewPage</div>
                <div>- - - - - - - - - - - LAST ITEM - - - - - - - - - - - </div>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default ListOverviewPage;

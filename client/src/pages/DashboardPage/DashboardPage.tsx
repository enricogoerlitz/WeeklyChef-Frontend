import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";
import { Link } from "react-router-dom";
import { FaIceCream, FaBowlRice, FaBurger } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { Search } from "react-bootstrap-icons";
import { LISTOVERVIEWPAGE } from "../../utils/routes";
import DashboardFilterBar from "../../components/Dashboard/DashboardFilterBar/DashboardFilterBar";
import "./DashboardPage.scss"
import DashboardCarousel from "../../components/Dashboard/DashboardCarousel/DashboardCarousel";
import DashboardRecipeItem from "../../components/Recipe/DashboardRecipeItem/DashboardRecipeItem";
import RecipeList from "../../components/Recipe/RecipeList/RecipeList";


interface IProps {}
const DashboardPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.DASHBOARDPAGE}
            headerText="Dashboard"
            showBackButton={true}
        >
            <MainLayout.Content>
                <DashboardFilterBar>
                    <Link className="dashboard__go-to-search" to={LISTOVERVIEWPAGE + "/select-search"}>
                        <Search /> {/*  Select search, when phone! */}
                    </Link>
                    <DashboardFilterBar.Item Icon={FaBurger} text="Hauptspeise" />
                    <DashboardFilterBar.Item Icon={MdFreeBreakfast} text="Frühstück" />
                    <DashboardFilterBar.Item Icon={FaBowlRice} text="Beilage" />
                    <DashboardFilterBar.Item Icon={FaIceCream} text="Dessert" />
                    
                </DashboardFilterBar>
                <div className="dashboard-divider"></div>


                <DashboardCarousel
                    className="top-rating-recepies"
                    headerText="Beliebt"
                    headerShowMoreLink="#"
                    headerClassName="dashboard-ctn-margin"
                >
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                </DashboardCarousel>

                <div className="dashboard-divider"></div>

                <DashboardCarousel
                    className="new-recipies"
                    headerText="Neuheiten"
                    headerShowMoreLink="#"
                    headerClassName="dashboard-ctn-margin"
                >
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                </DashboardCarousel>

                <div className="dashboard-divider"></div>

                <DashboardCarousel
                    className="fav-recipies"
                    headerText="Favoriten"
                    headerShowMoreLink="#"
                    headerClassName="dashboard-ctn-margin"
                >
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                </DashboardCarousel>

            <div className="dashboard-divider"></div>

            <DashboardCarousel
                className="fav-recipies"
                headerText="Beliebte Kategorien"
                headerClassName="dashboard-ctn-margin"
            >
            </DashboardCarousel>

            <div className="dashboard-divider"></div>

            <RecipeList>
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
                <RecipeList.Item />
            </RecipeList>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default DashboardPage;

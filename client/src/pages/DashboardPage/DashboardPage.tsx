import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";
import { Link } from "react-router-dom";
import { FaIceCream, FaBowlRice, FaBurger, FaPizzaSlice } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { Search } from "react-bootstrap-icons";
import { LISTOVERVIEWPAGE } from "../../utils/routes";
import DashboardFilterBar from "../../components/Dashboard/DashboardFilterBar/DashboardFilterBar";
import "./DashboardPage.scss"
import DashboardCarousel from "../../components/Dashboard/DashboardCarousel/DashboardCarousel";
import DashboardRecipeItem from "../../components/Recipe/DashboardRecipeItem/DashboardRecipeItem";
import RecipeList from "../../components/Recipe/RecipeList/RecipeList";
import recipeExampleData from "../../db/recipeExampleData";


interface IProps {}
const DashboardPage: React.FC<IProps> = (props) => {
    const recipes = recipeExampleData;

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
                    <DashboardFilterBar.Item Icon={FaPizzaSlice} text="Gebäck / Teig" />
                    
                </DashboardFilterBar>
                <div className="dashboard-divider"></div>

                <DashboardCarousel
                    className="top-rating-recepies"
                    headerText="Beliebt"
                    headerShowMoreLink="#"
                    headerClassName="dashboard-ctn-margin"
                >
                    {recipes.map(
                        recipe => <DashboardRecipeItem key={recipe.id} recipe={recipe} />)}
                </DashboardCarousel>

                <div className="dashboard-divider"></div>

                <DashboardCarousel
                    className="new-recipies"
                    headerText="Neuheiten"
                    headerShowMoreLink="#"
                    headerClassName="dashboard-ctn-margin"
                >
                    {recipes.map(
                        recipe => <DashboardRecipeItem key={recipe.id} recipe={recipe} />)}
                </DashboardCarousel>

                <div className="dashboard-divider"></div>

                <DashboardCarousel
                    className="fav-recipies"
                    headerText="Favoriten"
                    headerShowMoreLink="#"
                    headerClassName="dashboard-ctn-margin"
                >
                    {recipes.map(
                        recipe => <DashboardRecipeItem key={recipe.id} recipe={recipe} />)}
                </DashboardCarousel>

            <div className="dashboard-divider"></div>

            <DashboardCarousel
                className="fav-recipies"
                headerText="Beliebte Kategorien"
                headerClassName="dashboard-ctn-margin"
            >
            </DashboardCarousel>

            <div className="dashboard-divider"></div>

            <RecipeList jumpToId="dashboard-recipe-list">
                {recipes.map(
                    recipe => <RecipeList.Item key={recipe.id} recipe={recipe} />)}
            </RecipeList>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default DashboardPage;

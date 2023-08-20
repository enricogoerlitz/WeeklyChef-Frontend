import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";
import { Link } from "react-router-dom";
import { FaIceCream, FaBowlRice, FaBurger } from "react-icons/fa6";
import { Search } from "react-bootstrap-icons";
import { LISTOVERVIEWPAGE } from "../../utils/routes";
import DashboardFilterBar from "../../components/Dashboard/DashboardFilterBar/DashboardFilterBar";
import "./DashboardPage.scss"
import DashboardCarousel from "../../components/Dashboard/DashboardCarousel/DashboardCarousel";
import DashboardRecipeItem from "../../components/Recipe/DashboardRecipeItem/DashboardRecipeItem";


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
                    <DashboardFilterBar.Item Icon={FaBowlRice} text="Beilage" />
                    <DashboardFilterBar.Item Icon={FaIceCream} text="Dessert" />
                </DashboardFilterBar>


                <DashboardCarousel
                    className="top-rating-recepies"
                    headerText="Top Ratings"
                    headerShowMoreLink="#"
                >
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                    <DashboardRecipeItem />
                </DashboardCarousel>



                
                <section className="dashboard__carousel new-recipies">
                    <div className="dashboard__carousel__header">
                        <p>Probiere was neues</p>
                        <p>Mehr Anzeigen</p>
                    </div>
                    <section className="dashboard__carousel__content">
                        <Link to="#" className="recipe-container">
                            recipe
                        </Link>
                    </section>
                </section>


                <section className="dashboard__carousel fav-recipies">
                    <div className="dashboard__carousel__header">
                        <p>Deine Favoriten</p>
                        <p>Mehr Anzeigen</p>
                    </div>
                    <section className="dashboard__carousel__content">
                        <Link to="#" className="recipe-container">
                            recipe
                        </Link>
                    </section>
                </section>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default DashboardPage;

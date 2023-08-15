import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";
import { Link } from "react-router-dom";
import { FaIceCream, FaBowlRice, FaBurger } from "react-icons/fa6";
import "./DashboardPage.scss"
import { Search } from "react-bootstrap-icons";
import { LISTOVERVIEWPAGE } from "../../utils/routes";

interface IProps {}
const DashboardPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout
            pageSelection={PageSelection.DASHBOARDPAGE}
            headerText="For You"
            showBackButton={true}
        >
            <MainLayout.Content>
                <section className="dashboard__filter">
                    <Link className="go-to-search" to={LISTOVERVIEWPAGE + "/select-search"}>
                        <Search /> {/*  Select search, when phone! */}
                    </Link>
                    Seitliches scrollen filter toggle buttons
                    <div className="dashboard__filter__item">
                        <FaBurger className="dashboard__filter__item__icon" />
                        <p className="dashboard__filter__item__text">Hauptspeise</p>
                    </div>
                    <div className="dashboard__filter__item">
                        <FaBowlRice className="dashboard__filter__item__icon" />
                        <p className="dashboard__filter__item__text">Beilage</p>
                    </div>
                    <div className="dashboard__filter__item">
                        <FaIceCream className="dashboard__filter__item__icon" />
                        <p className="dashboard__filter__item__text">Dessert</p>
                    </div>
                </section>
                <section className="dashboard__carousel top-rating-recepies">
                    <div className="dashboard__carousel__header top-rating-recepies">
                        <p>Top Ratings</p>
                        <p>Mehr Anzeigen</p>
                    </div>
                    <section className="dashboard__carousel__content">
                        <Link to="#" className="recipe-container">
                            recipe
                        </Link>
                    </section>
                </section>
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

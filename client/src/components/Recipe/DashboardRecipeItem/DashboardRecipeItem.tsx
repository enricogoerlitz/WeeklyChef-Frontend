import React from "react";
import { Link } from "react-router-dom";
import lasagnePng from "../../../assets/recipes/lasagne-1.jpeg"
import "./DashboardRecipeItem.scss";

interface IProps {}
const DashboardRecipeItem: React.FC<IProps> = (props) => {
    return (
        <Link to="#" className="recipe-container">
            <img src={lasagnePng} alt="recipe" />
            {/* oben links bis ungefähr zur hölfte das runde bild des img */}

        </Link>
    )
}

export default DashboardRecipeItem;

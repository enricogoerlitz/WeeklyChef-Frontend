import React from "react";
import { Link } from "react-router-dom";
import lasagnePng from "../../../assets/recipes/lasagne-1.jpeg"
import "./DashboardRecipeItem.scss";
import { Bookmark, Cart3, Heart, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { BiSolidLeaf } from "react-icons/bi";
import { AiFillSignal, AiFillClockCircle } from "react-icons/ai";
import { IRecipeModel } from "../../../models/recipe";

interface IProps {
    recipe: IRecipeModel,

}
const DashboardRecipeItem: React.FC<IProps> = ({ recipe }) => {
    return (
        <Link to="#" title={recipe.name}  className="recipe-container">
            <div className="recipe-container__img-container">
                <img src={lasagnePng} alt="recipe" className="recipe-container__img-container__img"/>
                <span className={"recipe-container__img-container__category-badge"}>{recipe.mainCategory}</span>
            </div>
            <div className="recipe-container__label-veggy-vegan-icons">
                <BiSolidLeaf />
            </div>
            <div className="recipe-container__recipe">
                <div className="recipe-container__recipe__flex-column">
                    <h3 className="recipe-container__recipe__title">
                        {recipe.name}
                    </h3>
                    <h4 className="recipe-container__recipe__subtitle">
                        {recipe.subDescription}
                    </h4>
                </div>
                <div className="recipe-container__recipe__flex-column">
                    <div className="recipe-container__recipe__rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarHalf />
                        <Star />
                    </div>
                    <div className="recipe-container__recipe__info">
                        <span className="recipe-container__recipe__info__item"><AiFillClockCircle />&nbsp;{recipe.preparationTime}min</span>
                        <span className="recipe-container__recipe__info__item"><AiFillSignal />&nbsp;{recipe.difficultyLevel}</span>
                    </div>
                </div>
            </div>
            <div onClick={(e) => e.preventDefault()} className="recipe-container__action-icons">
                <Heart onClick={() => console.log("click")}/> {/* toggle: HeartFill */}
                <Bookmark onClick={() => console.log("click")}/> {/* toggle: BookmarkFill with count of Bookmarks! */}
                <Cart3 onClick={() => console.log("click")}/>
            </div>
        </Link>
    )
}

export default DashboardRecipeItem;

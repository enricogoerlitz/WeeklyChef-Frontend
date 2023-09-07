import React from "react";
import { Link } from "react-router-dom";
import lasagnePng from "../../../assets/recipes/lasagne-1.jpeg"
import "./RecipeList.scss";
import { Bookmark, Cart3, Heart, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { BiSolidLeaf } from "react-icons/bi";
import { AiFillClockCircle, AiFillSignal } from "react-icons/ai";
import { IRecipeModel } from "../../../models/recipe";

interface IProps {
    recipe: IRecipeModel,
}
const RecipeListItem: React.FC<IProps> = ({ recipe }) => {

    const getBadgeColor = (): string => {
        switch(recipe.mainCategory) {
            case "Hauptspeise":
                return "green"
            case "Dessert":
                return "blue"
            case "Frühstück":
                return "yellow"
            case "Beilage":
                return "pink"
            case "Gebäck / Teig":
                return "purple"
            default:
                return ""
        }
    }

    return (
        <Link to="#" title={recipe.name} className="recipe-list-container__item">
            <div className="recipe-list-container__item__label-veggy-vegan-icons">
                <BiSolidLeaf />
            </div>
            <div className="recipe-list-container__item-flex-column">
                <div className="recipe-list-container__item__image-container">
                    <img src={lasagnePng} alt="recipe" className="recipe-list-container__item__image-container__img"/>

                    <h3 className="recipe-list-container__item__image-container__title">
                        {recipe.name}
                    </h3>
                    <h4 className="recipe-list-container__item__image-container__subtitle">
                        {recipe.subDescription}
                    </h4>
                </div>
                <div>
                    <div className="recipe-list-container__item__image-container__tag-badges">
                        <span className={"recipe-list-container__item__image-container__tag-badges__category-badge " + getBadgeColor()}>{recipe.mainCategory}</span>
                        {recipe.tags.map(tag => {
                            return (
                                <span key={tag} className="recipe-list-container__item__image-container__tag-badges__badge">
                                    {tag}
                                </span>
                            )
                        })}
                    </div>

                    <div className="recipe-list-container__item__rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarHalf />
                        <Star />
                    </div>
                    <div className="recipe-list-container__item__info">
                        <span className="recipe-list-container__item__info__item"><AiFillClockCircle />&nbsp;{recipe.preparationTime}min</span>
                        <span className="recipe-list-container__item__info__item"><AiFillSignal />&nbsp;{recipe.difficultyLevel}</span>
                    </div>
                </div>
            </div>
            <div onClick={(e) => e.preventDefault()} className="recipe-list-container__item__action-icons">
                <Heart onClick={() => console.log("click")}/> {/* toggle: HeartFill */}
                <Bookmark onClick={() => console.log("click")}/> {/* toggle: BookmarkFill with count of Bookmarks! */}
                <Cart3 onClick={() => console.log("click")}/>
            </div>
        </Link>
    )
}

export default RecipeListItem;

import React from "react";
import { Link } from "react-router-dom";
import lasagnePng from "../../../assets/recipes/lasagne-1.jpeg"
import "./DashboardRecipeItem.scss";
import { Bookmark, Cart3, Heart, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { BiSolidLeaf } from "react-icons/bi";
import { AiFillSignal, AiFillClockCircle } from "react-icons/ai";

interface IProps {
    recipeName?: string,
}
const DashboardRecipeItem: React.FC<IProps> = (props) => {
    return (
        <Link to="#" title={props.recipeName}  className="recipe-container">
            <div className="recipe-container__img-container">
                <img src={lasagnePng} alt="recipe" className="recipe-container__img-container__img"/>
                <span className="recipe-container__img-container__category-badge">Hauptspeise</span>
            </div>
            <div className="recipe-container__label-veggy-vegan-icons">
                <BiSolidLeaf />
            </div>
            <div className="recipe-container__recipe">
                <div className="recipe-container__recipe__flex-column">
                    <h3 className="recipe-container__recipe__title">
                        Spaghetti Carbonara alla TeddyBear bisschen text hier bisschen text da
                    </h3>
                    <h4 className="recipe-container__recipe__subtitle">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
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
                        <span className="recipe-container__recipe__info__item"><AiFillClockCircle />&nbsp;60min</span>
                        <span className="recipe-container__recipe__info__item"><AiFillSignal />&nbsp;fortgesch.</span>
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

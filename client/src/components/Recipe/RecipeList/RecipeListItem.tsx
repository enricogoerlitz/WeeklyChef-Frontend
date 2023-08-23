import React from "react";
import { Link } from "react-router-dom";
import lasagnePng from "../../../assets/recipes/lasagne-1.jpeg"
import "./RecipeList.scss";
import { Bookmark, Cart3, Heart, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { BiSolidLeaf } from "react-icons/bi";
import { AiFillClockCircle, AiFillSignal } from "react-icons/ai";

interface IProps {
    recipeName?: string,
}
const RecipeListItem: React.FC<IProps> = (props) => {
    return (
        <Link to="#" title={props.recipeName} className="recipe-list-container__item">
            <div className="recipe-list-container__item__label-veggy-vegan-icons">
                <BiSolidLeaf />
            </div>
            <div className="recipe-list-container__item-flex-column">

                <div className="recipe-list-container__item__image-container">
                    <img src={lasagnePng} alt="recipe" className="recipe-list-container__item__image-container__img"/>

                    <h3 className="recipe-list-container__item__image-container__title">
                    {/* Spaghetti Carbonara */}
                        Spaghetti Carbonara alla TeddyBear bisschen text hier bisschen text da
                    </h3>
                    <h4 className="recipe-list-container__item__image-container__subtitle">
                        {/* short */}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </h4>
                    <div className="recipe-list-container__item__image-container__tag-badges">
                        <span className="recipe-list-container__item__image-container__tag-badges__category-badge">Hauptspeise</span>
                        <span className="recipe-list-container__item__image-container__tag-badges__badge">
                            Suppe
                        </span>
                        <span className="recipe-list-container__item__image-container__tag-badges__badge">
                            Vegan
                        </span>
                        <span className="recipe-list-container__item__image-container__tag-badges__badge">
                            Sommer
                        </span>
                        <span className="recipe-list-container__item__image-container__tag-badges__badge">
                            Rustikal
                        </span>
                        <span className="recipe-list-container__item__image-container__tag-badges__badge">
                            Brot
                        </span>

                    </div>
                </div>
                <div>
                    <div className="recipe-list-container__item__rating">
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarHalf />
                        <Star />
                    </div>
                    <div className="recipe-list-container__item__info">
                        <span className="recipe-list-container__item__info__item"><AiFillClockCircle />&nbsp;60min</span>
                        <span className="recipe-list-container__item__info__item"><AiFillSignal />&nbsp;fortgesch.</span>
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

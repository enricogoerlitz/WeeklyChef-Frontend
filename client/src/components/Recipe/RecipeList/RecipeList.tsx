import React from "react";
import { IBaseProps } from "../../../utils/interfaces";
import RecipeListItem from "./RecipeListItem";
import { ArrowClockwise } from "react-bootstrap-icons";

type RecipeListType = {
    Item: typeof RecipeListItem
}
interface IProps extends IBaseProps {}
const RecipeList: React.FC<IProps> & RecipeListType = (props) => {
    return (
        <>
            <div className="recipe-list-header">
                <h3 className="recipe-list-header__title">Zufällige Rezepte</h3>
                <button className="recipe-list-header__refresh-btn">
                    <ArrowClockwise />
                </button>
            </div>
            <section className="recipe-list-container">
                {props.children}
            </section>
        </>
    )
}

RecipeList.Item = RecipeListItem;

export default RecipeList;

import React from "react";
import { IBaseProps } from "../../../utils/interfaces";
import RecipeListItem from "./RecipeListItem";
import { ArrowClockwise } from "react-bootstrap-icons";

type RecipeListType = {
    Item: typeof RecipeListItem
}
interface IProps extends IBaseProps {
    jumpToId: string,
}
const RecipeList: React.FC<IProps> & RecipeListType = (props) => {
    const handleRefreshClick = () => {
        const targetElement = document.getElementById(props.jumpToId) as HTMLDivElement;
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <div className="recipe-list-header">
                <h3 className="recipe-list-header__title">Deine Rezeptvorschläge</h3>
                <button onClick={handleRefreshClick} className="recipe-list-header__refresh-btn">
                    <ArrowClockwise />
                </button>
            </div>
            <section id={props.jumpToId} className="recipe-list-container">
                {props.children}
            </section>
        </>
    )
}

RecipeList.Item = RecipeListItem;

export default RecipeList;

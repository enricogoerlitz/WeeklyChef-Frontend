import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { PageSelection } from "../../utils/enums";

interface IProps {}
const CartPage: React.FC<IProps> = (props) => {
    return (
        <MainLayout pageSelection={PageSelection.CARTPAGE}>
            <MainLayout.Content>
                <h1>CartPage</h1>
            </MainLayout.Content>
        </MainLayout>
    );
}
 
export default CartPage;
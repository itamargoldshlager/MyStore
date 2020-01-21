import React, {FC} from 'react';
import {
    Switch,
    Route,
    useParams
} from "react-router-dom";
import GenericTable from "../GenericTable/GenericTable";
import TableProduct from "../Products/TableProduct"
import data from "../../Mocks/Products/MockProducts";
const About: FC = () => {
    let { category } = useParams();
    console.log(category);
    return (
        <GenericTable
            rowComponent={TableProduct}
            rows={data.filter(product => product.category === category)}
        />
    );
};

const RouterPage: FC = () => {
    return (
        <Switch>
            <Route path="/products/:category">
                <About/>
            </Route>
            <Route path="/users">
                <h1> Users </h1>
            </Route>
            <Route path="/">
                <h1> / </h1>
            </Route>
        </Switch>
    );
};



export default RouterPage;

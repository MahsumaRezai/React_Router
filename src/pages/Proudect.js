import { Fragment } from "react";
import Cartform from "../componet/AddUser/Cartfrom";
import classes from './Prodouct.module.css'

const Products = () => {
    return (
        <Fragment>

            <Cartform>
                <h2 className={classes.title}>Welcome to Products page</h2>
            </Cartform>

        </Fragment>

    )
}
export default Products;
import { Fragment } from "react";
import Cartform from "../componet/AddUser/Cartfrom";
import classes from './Prodouct.module.css'

const Welcome = (props) => {
    return (
        <Fragment>
            <Cartform>
                <h2 className={classes.title}>
                    Welcome to React Site
                </h2>

            </Cartform>
        </Fragment>
    )
}
export default Welcome;
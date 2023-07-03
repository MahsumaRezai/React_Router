import classes from './Footer.module.css';
import {Route} from 'react-router-dom';
import Footers from '../../pages/Footer';
const Footer=(props)=>{
    return (
        <div className={classes.Footer}>
            <Route path='/Footer'>
                <Footers/>

            </Route>

        </div>
    )

}
export default Footer;
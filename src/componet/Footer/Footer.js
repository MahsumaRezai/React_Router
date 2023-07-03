import Card from '../Error/Card';
import classes from './Footer.module.css';
const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <Card >
                <div className={classes.cart}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur iste at eveniet, ut error eius
                        nobis dolores
                        reiciendis velit facilis commodi voluptatum amet, dolore consequuntur maiores vitae repellendus cumque.</p>
                </div>
            </Card>


        </div>
    )

}
export default Footer;
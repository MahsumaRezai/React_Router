import { Link } from 'react-router-dom'
const Products = () => {
    return (
        <header>
            <ul>
                <li><Link to='/product 1'>prodouct 1</Link></li>
                <li><Link to='/product 2'>prodouct 3</Link></li>
                <li><Link to='/product 3'>prodouct 3</Link></li>
            </ul>
        </header>
    )
}
export default Products;
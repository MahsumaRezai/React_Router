import { Link } from 'react-router-dom'
const MainHeader = () => {
    return (
        <header>
            <na>
                <ul>
                    <li>< Link to="/welcome"> Welcome</Link></li>
                    <li>< Link to="/product">Product</Link></li>

                </ul>
            </na>
        </header>
    )

}
export default MainHeader;
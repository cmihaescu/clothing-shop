import "./category-item.styles.scss"
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category
    const navigate = useNavigate();
    const navigateToShop = () => { navigate("/shop") }

    return (

        <div className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div onClick={navigateToShop} className="category-body-container">
                <h2> {title} </h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem
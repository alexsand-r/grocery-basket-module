import "./button-cart.css";
import { FiShoppingCart } from "react-icons/fi";




function ButtonCart() {
    return (
         <button type="button" className="header__bascet">
            <FiShoppingCart className="header__cart" />
            <span className="test">
                <span>0</span>
            </span>
        </button>
    );
}

export default ButtonCart
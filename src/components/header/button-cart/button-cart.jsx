import "./button-cart.css";
import { FiShoppingCart } from "react-icons/fi";




function ButtonCart({totalQuantity, toggleBasket}) {
    return (
         <button type="button" className="header__bascet" onClick={toggleBasket}>
            <FiShoppingCart className="header__cart" />
            <span className="test">
                <span>{totalQuantity}</span>
            </span>
        </button>
    );
}

export default ButtonCart
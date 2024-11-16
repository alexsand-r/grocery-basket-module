import './basket-element.css';
import { RiDeleteBinLine } from "react-icons/ri";

function BasketElement() {
    return (
        <div className="product-item">
            <div className="product-tem__picture">
                <img src="img/284-7203-500x500.jpeg" alt="image" />
            </div>
            <div className="product-tem__description">
                <p>Волейбольний М'яч MINKSA (Розмір 5) PU клейка без швів 0022</p>
            </div>
            <div className="quantity-block">
                <button className="plus">+</button>
                <button className="quantity-product">0</button>
                <button className="minus">-</button>
                <button className="delete">
                    <RiDeleteBinLine className='delete-delete' />
                </button>
            </div>
    
        </div>
    );
};

export default BasketElement;
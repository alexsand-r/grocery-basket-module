import './basket.css';
import ProductCarList from './product-list/product-list';
import ProductTotal from './product-total/product-total';


function Bascet({basketItems, deleteProduct, totalPrice, updateQuantity, closeDBasket}) {
    return (
        <div className="basket">
            <div>
                <div className="button-close">
                    <button type="button" className="btn-close" onClick={closeDBasket}>close</button>
                </div>
                <ProductCarList basketItems={basketItems} deleteProduct={deleteProduct} updateQuantity={updateQuantity} />
            </div>
        
            <ProductTotal totalPrice={totalPrice} />
                  
        </div>
    )
}

export default Bascet;
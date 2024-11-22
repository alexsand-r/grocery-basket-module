import './basket.css';
import ProductCarList from './product-list/product-list';
import ProductTotal from './product-total/product-total';


function Bascet({basketItems, deleteProduct, totalPrice, updateQuantity}) {
    return (
        <div className="basket">
            <div>
                <div className="button-close">
                    <button type="button" className="btn-close">close</button>
                </div>
                <ProductCarList basketItems={basketItems} deleteProduct={deleteProduct} updateQuantity={updateQuantity} />
            </div>
        
            <ProductTotal totalPrice={totalPrice} />
                  
        </div>
    )
}

export default Bascet;
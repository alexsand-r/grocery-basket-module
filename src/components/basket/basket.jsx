import './basket.css';
import ProductCarList from './product-list/product-list';
import ProductTotal from './product-total/product-total';


function Bascet({basketItems, deleteProduct}) {
    return (
        <div className="basket">
            <div>
                <div className="button-close">
                    <button type="button" className="btn-close">close</button>
                </div>
                <ProductCarList basketItems={basketItems} deleteProduct={deleteProduct} />
            </div>
        
            <ProductTotal />
                  
                    {/* <div className="product-total">
                        <div className="product-total-price">
                            <div className="product-total-price__item">Total</div>
                            <div className="product-total-price__price"><span>123.35</span>грн</div>
                        </div>
                        <button className="btn-buy" type="button">buy</button>
                      
                    </div> */}
                
            </div>
    )
}

export default Bascet;
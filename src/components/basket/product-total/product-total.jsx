import './product-total.css';

function ProductTotal({totalPrice}) {
 
    return (
        <div className="product-total">
            <div className="product-total-price">
                <div className="product-total-price__item">Вартість товару</div>
                <div className="product-total-price__price"><span>{totalPrice.toFixed(2)}</span>грн</div>
            </div>
            <button className="btn-buy" type="button">buy</button>
            
        </div>
    )
};

export default ProductTotal;

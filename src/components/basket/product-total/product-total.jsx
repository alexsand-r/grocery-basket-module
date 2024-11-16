import './product-total.css';

function ProductTotal() {
    return (
        <div className="product-total">
            <div className="product-total-price">
                <div className="product-total-price__item">Total</div>
                <div className="product-total-price__price"><span>123.35</span>грн</div>
            </div>
            <button className="btn-buy" type="button">buy</button>
            
        </div>
    )
};

export default ProductTotal;
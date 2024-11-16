import BasketElement from '../basket-element/basket-element';
import './product-list.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function ProductCarList() {
    const [basketItem, setBasketItem] = useState(
        {}
    )
    return (
        <div className="product-list">
            <BasketElement />
            
        </div>
    )
};

export default ProductCarList;
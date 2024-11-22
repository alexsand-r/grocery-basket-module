import './basket-element.css';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import React, { useState } from 'react';


function BasketElement({ product, deleteProduct, updateQuantity }) {

    
    return (
        <div className="product-item">
            <div className="product-tem__picture">
               <img src={product.image } alt={product.title }/>
            </div>
            <div className="product-tem__description">
                <p>{product.title }</p>
            </div>
            <div className="quantity-block">
                <FaPlus className="plus" onClick={() => updateQuantity(product.id, 1)} />
                <span className="quantity-product">{product.quantity}</span>
                <FaMinus className="minus" onClick={() => updateQuantity(product.id, -1)}  />
                           
                <RiDeleteBinLine className='delete-delete' onClick={()=> deleteProduct(product.id)} />
               
            </div>
    
        </div>
    );
};

export default BasketElement;
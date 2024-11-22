import './basket-element.css';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import React, { useState } from 'react';


function BasketElement({ product, deleteProduct }) {

const [count, setCount] = useState(0);

const onClickPlus = () => {
  setCount((prevCount) => prevCount + 1); // Используем prevCount для точного обновления
};

const onClickMines = () => {
  setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Проверяем предыдущее значение
};

    
    return (
        <div className="product-item">
            <div className="product-tem__picture">
               <img src={product.image } alt={product.title }/>
            </div>
            <div className="product-tem__description">
                <p>{product.title }</p>
            </div>
            <div className="quantity-block">
                <FaPlus className="plus" onClick={onClickPlus} />
                <span className="quantity-product">{count}</span>
                <FaMinus className="minus" onClick={onClickMines} />
                           
                <RiDeleteBinLine className='delete-delete' onClick={()=> deleteProduct(product.id)} />
               
            </div>
    
        </div>
    );
};

export default BasketElement;
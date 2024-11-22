import './item-product.css'
import { FiShoppingCart } from "react-icons/fi";
import StarRetingBody from '../star-reting-body/star-reting-body';


function ItemProduct({item, addToBasket}) {
    return (
         <section className="card-item__element">
           <a href="#" className="card-item__img">
                <img src={item.image } alt={ item.title} /> 
            </a>
              {/* Передаем рейтинг товара как initialRating */}
            <StarRetingBody initialRating={item.rating} />
       
            <a href="#" className="card-item__title">{ item.title}</a>
     
            <div className="card-item__action">
                <div className="card-item__price"><span>{ item.price }</span>грн</div>
                <button type="button" className="card-item__bascet">
                   <FiShoppingCart className="card-item__bascet-icon" onClick={()=> addToBasket(item)} />
                </button>
            </div>
        </section>
    );
};


export default ItemProduct;
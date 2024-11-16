import './card-item-body.css';
import ItemProduct from './item-product/item-product';


function CardItemBody({items}) {
    return (
        <div className="card-item__body">
             {items.map((item) => (
                <ItemProduct key={item.id} item={item} /> // Передаем каждый товар как пропс
            ))}
        </div>
    );
};


export default CardItemBody;
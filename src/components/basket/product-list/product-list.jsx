import BasketElement from '../basket-element/basket-element';
import './product-list.css';



function ProductCarList({basketItems, deleteProduct, updateQuantity}) {
   


    return (
        <div className="product-list">
 {/*  map  прохожусь по переданному массиву basketItems чтбы отрисовать  */}
            {basketItems.map((product) => (
                <BasketElement key={product.id} product={product} deleteProduct={deleteProduct } updateQuantity={updateQuantity} />
            ))}
            
            
        </div>
    )
};

export default ProductCarList;
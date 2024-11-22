import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/header/header.jsx';
import CardItemBody from './components/card-item-body/card-item-body.jsx';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Bascet from './components/basket/basket.jsx';

// Главный компонент, где будет храниться состояние товаров и корзины
function App() {
  const [items] = useState([
    {
      id: uuidv4(), // Генерирует уникальный ID
      image: "src/assets/img/284-7203-500x500.jpeg",
      title: "Волейбольний М'яч MINKSA (Розмір 5) PU клейка без швів 0022",
      price: 1254.02,
      rating: 4, // Рейтинг товара
    },
    {
      id: uuidv4(),
      image: "src/assets/img/myach-futbolnyj.jpg",
      title: "Футбольний м'яч Adidas",
      price: 980.50,
      rating: 3, // Рейтинг товара
    },
     {
      id: uuidv4(),
      image: "src/assets/img/Balls_01.jpg",
      title: "М'яч баскетбольний",
      price: 1580.50,
      rating: 5, // Рейтинг товара
    },
       {
      id: uuidv4(),
      image: "src/assets/img/myach_basketbolnyy_nike.webp",
      title: "М'яч баскетбольний Nike",
      price: 1580.50,
      rating: 1, // Рейтинг товара
    },
    {
      id: uuidv4(),
      image: "src/assets/img/e152d.jpg",
      title: "М'яч футбольний Nike",
      price: 2000.50,
      rating: 3, // Рейтинг товара
    },
    {
      id: uuidv4(),
      image: "src/assets/img/V5M1900-800x800.jpg",
      title: "М'яч футбольний Nike",
      price: 2560.50,
      rating: 3, // Рейтинг товара
    },
    // Можно добавить больше товаров
  ]);

  const [basketItems, setBasketItems] = useState([]); // Состояние для товаров в корзине
    // Функция для добавления товаров в корзину
  const addToBasket = (item) => {
    setBasketItems((prevItems) => {
      // Проверяем, есть ли товар в корзине
      const existingItem = prevItems.find((basketItem) => basketItem.id === item.id);

      // Если товар уже есть в корзине, увеличиваем количество
      if (existingItem) {
        return prevItems.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 } // Увеличиваем количество
            : basketItem
        );
      }

      // Если товара нет в корзине, добавляем его
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

   // Выводим товары в корзине в консоль
  console.log(basketItems);
const deleteProduct = (id) => {
  setBasketItems((prevItems) => {
    const updatedItems = prevItems.filter((item) => item.id !== id); // Оставляем все элементы, кроме того, у которого совпадает id
    console.log('Удаляю товар с id ' + id);
    return updatedItems; // Обновляем состояние новым массивом
  });
};

  return (
    <StrictMode>
      <Header />
      {/* Передаем товары и функцию addToBasket в CardItemBody */}
      <CardItemBody items={items} addToBasket={addToBasket} />
      <Bascet basketItems={basketItems} deleteProduct={deleteProduct} /> {/* Передаем корзину в компонент Bascet */}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);



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

  const [isBasketVisible, setIsBasketVisible] = useState(false); // Состояние для видимости корзины

  const [searchTerm, setSearchTerm] = useState(""); // Состояние для строки поиска


    // Функция для добавления товаров в корзину
 const addToBasket = (item) => {
  setBasketItems((prevItems) => {
    // Проверяем, есть ли товар в корзине
    const existingItem = prevItems.find((basketItem) => basketItem.id === item.id);

    // Если товар уже есть в корзине, ничего не делаем
    if (existingItem) {
      console.log(`Товар с id ${item.id} уже находится в корзине.`);
      return prevItems; // Возвращаем текущий массив без изменений
    }

    // Если товара нет в корзине, добавляем его
    return [...prevItems, { ...item, quantity: 1 }];
  });
};

  // счетчик товара в корзине
  const updateProductQuantity = (id, delta) => {
  setBasketItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    )
  );
};


   // Выводим товары в корзине в консоль
  console.log(basketItems);
  // функция для удаления товара
const deleteProduct = (id) => {
  setBasketItems((prevItems) => {
    const updatedItems = prevItems.filter((item) => item.id !== id); // Оставляем все элементы, кроме того, у которого совпадает id
    console.log('Удаляю товар с id ' + id);
    return updatedItems; // Обновляем состояние новым массивом
  });
};
 
   // Функция для подсчёта общей стоимости
  const calculateTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };
  const totalPrice = calculateTotalPrice();

   // Функция для подсчёта общего количества товаров
  const getTotalQuantity = () => {
    return basketItems.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity();

    // Функция для смены видимости корзины
  const toggleBasketVisibility = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  // функция закрывает корзину, клик на кнопку close
  const closeDBasket = () => {
    setIsBasketVisible(false);
  }

// Функция для фильтрации товаров
  const filterItems = () => {
    if (!searchTerm) return items;  // Если нет поискового запроса, возвращаем все товары
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())  // Фильтрация по названию товара
    );
  };

  // Получаем отфильтрованные товары
  const filteredItems = filterItems();  // В этой переменной находятся отфильтрованные товары


  return (
    <StrictMode>
      <Header   totalQuantity={totalQuantity} 
        toggleBasket={toggleBasketVisibility} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      {/* Передаем товары и функцию addToBasket в CardItemBody */}
      <CardItemBody  items={filteredItems}   addToBasket={addToBasket} />
   

        {/* Условный рендеринг корзины */}
    {isBasketVisible && (
      <Bascet
        basketItems={basketItems}
        deleteProduct={deleteProduct}
        totalPrice={totalPrice}
          updateQuantity={updateProductQuantity}
          closeDBasket={closeDBasket}
      />
    )}
      
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
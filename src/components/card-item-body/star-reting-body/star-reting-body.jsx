import './star-reting-body.css'
import Star from './star/star';
import React, { useState } from 'react';




function StarRetingBody({initialRating}) {
    const [rating, setRating] = useState(initialRating); // Состояние для хранения текущего рейтинга
      // Функция для изменения рейтинга
    const handleRatingChange = (newRating) => {
        setRating(newRating); // Обновляем состояние рейтинга
    };
    
    return (<div className="card-item__rating">
          {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating} // Передаём, заполнена звезда или нет
          onClick={() => handleRatingChange(star)} // Передаём функцию клика
          
        />
      ))}
    </div>);
};

export default StarRetingBody;


import './star.css';
import { FaStar } from "react-icons/fa6";

function Star({filled, onClick}) {
    return (
            <button className="card-item__star" onClick={onClick}> {/* Добавляем onClick для обработки клика */}
      <FaStar
        className={`star ${filled ? 'filled' : ''}`} // Добавляем класс "filled", если звезда заполнена
        alt="star-rating"
      />
    </button>
    );
};

export default Star;


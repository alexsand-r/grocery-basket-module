import './forma-search.css';
import { IoIosSearch } from "react-icons/io";


function FormSearch({  searchTerm, setSearchTerm }) {
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;  // Получаем новый текст
    setSearchTerm(newSearchTerm);  // Обновляем состояние в родительском компоненте

    // Выводим в консоль введенное значение
    console.log(newSearchTerm);
  };
    return (
        <>
             <form className="header__input-block" action="#" method="get">
                <input 
                    type="text" 
                    className="header__input" 
                    placeholder="Введіть назву товару ..."
                    value={searchTerm}  // Привязываем инпут к состоянию
                    onChange={handleSearchChange}  // Вызываем фильтрацию при изменении текста
        />
                <IoIosSearch className="header__search-icon" />
            </form>
        </>
    )
}

export default FormSearch
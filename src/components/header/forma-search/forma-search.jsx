import './forma-search.css';
import { IoIosSearch } from "react-icons/io";


function FormSearch() {
    return (
        <>
             <form className="header__input-block" action="#" method="get">
                <input type="text" className="header__input" placeholder="Введіть назву товару ..."/>
                <IoIosSearch className="header__search-icon" />
            </form>
        </>
    )
}

export default FormSearch
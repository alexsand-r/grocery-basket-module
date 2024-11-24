import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'



import './header.css'
import ButtonCart from './button-cart/button-cart';
import FormSearch from './forma-search/forma-search';

function Header({totalQuantity, toggleBasket, filterProduct, searchTerm, setSearchTerm}) {
  return (
    <>
        <header className="header">
                <div className="header__container">
                    <div className="header__body">
                       <FormSearch filterProduct={filterProduct} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <ButtonCart totalQuantity={totalQuantity} toggleBasket={toggleBasket} />
                    </div>
                </div>
            </header>
    </>
  )
}

export default Header

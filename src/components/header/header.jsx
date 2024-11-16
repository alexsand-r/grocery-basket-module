import { useState } from 'react'
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '/vite.svg'



import './header.css'
import ButtonCart from './button-cart/button-cart';
import FormSearch from './forma-search/forma-search';

function Header() {
  return (
    <>
        <header className="header">
                <div className="header__container">
                    <div className="header__body">
                       <FormSearch />
                        <ButtonCart />
                    </div>
                </div>
            </header>
    </>
  )
}

export default Header

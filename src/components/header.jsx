import React, { useState } from 'react'
import './header.css'
import logo from './picture/logo.png'

export const Header = () => {
    const handleRedirect = () => {
        window.open('https://www.dns-shop.ru', '_blank') // Открытие в новой вкладке
    }

    return (
        <header>
            <div className='header'>
                <div>
                    <img src={logo} alt='Логотип' className='logo' />
                </div>

                <div>
                    <button onClick={handleRedirect} >Перейти на сайт</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
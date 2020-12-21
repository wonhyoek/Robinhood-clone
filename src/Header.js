import React from 'react';
import Logo from "./robinhood.svg"

export default () => {
    return (
        <div className = "header__wrapper">
            <div className = "header__logo">
                <img src = {Logo} width = {25}/>
            </div>
        </div>
    )
}

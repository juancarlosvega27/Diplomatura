import React from "react";
import '../../styles/components/layout/Header.css';
const Header = (props) => {
    return (
        <header>
            <div className="cabecera">
            <img className="logo" src="images/Logo.png" width="150" alt="Aquí va el logo"/>
                    <h1>Tu mejor opción para espacios reducidos</h1>
            </div>
        </header>
    );
}
export default Header;

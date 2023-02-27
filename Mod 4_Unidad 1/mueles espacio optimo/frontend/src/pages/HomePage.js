import React from "react";
import '../styles/components/pages/HomePage.css';
const HomePage = (props) => {
    return (
        <main className="mainindex">

        <div className="imghome">
            <img src="images/Mplegable_1.jpg" alt="Imagen de Mueble"/>
        </div>
        <div className="texthome">
            <h3>
                En un tiempo deonde los departamentos tienen optimizado el espacio de sus metros cuadrados tu mejor
                opción es elegir muebles que cumplan varias funciones y ocupen poco espacio
            </h3>
            <h3>
                En este espacio los invitamos a conocernos y contactarnos para ofrecerles las mejores opciones según su necesidad
            </h3>
        </div>
    </main>
    );
}
export default HomePage;
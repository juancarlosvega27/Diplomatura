import React from "react";
import '../styles/components/pages/GaleriaPage.css';
const GaleriaPage = (props) => {
    return (
        <main className="maingaleria">
        <div className="contenedorimagenes">
            <img src="images/galeria1.JPG" alt="imagen"/>
            <img src="images/galeria2.JPG" alt="imagen"/>
            <img src="images/galeria3.JPG" alt="imagen"/>
            <img src="images/galeria4.JPG" alt="imagen"/>
            <img src="images/galeria5.JPG" alt="imagen"/>
        </div>
    </main>
    );
}
export default GaleriaPage;
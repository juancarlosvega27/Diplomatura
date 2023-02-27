import React from "react";
import '../styles/components/pages/ContactoPage.css';
const ContactoPage = (props) => {
    return (
        <main className="maincontacto">

        <div>
            <h2>Contacto rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>

        <div className="datoscontacto">
            <h3>Otras vias de Contacto</h3>
            <h4>Teléfono: 123456789</h4>
            <h4>E-mail: paginadepruba@gmail.com</h4>
            <h4>Facebook: Pagina de prueba</h4>
            <h4>Instagram: Pagina de Prueba</h4>
        </div>


    </main>
    );
}
export default ContactoPage;
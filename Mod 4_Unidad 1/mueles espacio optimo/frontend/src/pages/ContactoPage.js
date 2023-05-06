import React, {useState} from "react";
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    const initialForm = {
        nombre:'',
        email: '',
        telefono:'',
        mensaje:''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState ('');
    const [formData, setFormData]=useState(initialForm);

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name] : value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
axios.post('http://localhost:3000/api/contacto',formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error===false){
        setFormData(initialForm)
    }
}
    
    return (
        <main className="maincontacto">
        <div>
            <h2>Contacto rápido</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                {sending ? <p>Enviando...</p>:null}
                {msg ? <p>{msg}</p> : null}
               
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
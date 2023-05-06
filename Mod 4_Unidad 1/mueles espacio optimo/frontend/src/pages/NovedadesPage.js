import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
     
<section className='holder'>
    <h2>Novedades</h2>
    {loading ? (
        <p>Cargando   </p>
    ) : (
        novedades.map(item => <NovedadItem key={item.id}
            title={<h3>{item.titulo}</h3>}  subtitle={<h4>{item.subtitulo}</h4>}
            imagen={item.imagen} body = {item.cuerpo} />)
    )}
</section>
    );
} 

export default NovedadesPage;








  /*   <main className="mainnovedades">
        <div className="novedad">
            <h2>Novedad 1</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem delectus molestiae sint
                eligendi nesciunt vitae dolorum perspiciatis dicta, quas magnam quia accusamus? Repudiandae veniam
                libero dolorem qui. Nisi, odit.
            </h3>
        </div>

        <div className="novedad">
            <h2>Novedad 2</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem delectus molestiae sint
                eligendi nesciunt vitae dolorum perspiciatis dicta, quas magnam quia accusamus? Repudiandae veniam
                libero dolorem qui. Nisi, odit.
            </h3>
        </div>
        <div className="novedad">
            <h2>Novedad 3</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem delectus molestiae sint
                eligendi nesciunt vitae dolorum perspiciatis dicta, quas magnam quia accusamus? Repudiandae veniam
                libero dolorem qui. Nisi, odit.
            </h3>
        </div>

    </main> */
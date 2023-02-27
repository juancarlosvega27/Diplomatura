import React from "react";
import '../styles/components/pages/NosotrosPage.css';
const NosotrosPage = (props) => {
    return (
        <main className="mainquiensomos">
        <h2>Historia</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fuga quisquam similique, commodi,
            exercitationem minima, accusantium deleniti quasi voluptate distinctio maxime. Ipsum magni ratione sequi
            praesentium eveniet quidem fuga magnam.</h3>
            <h2>Integrantes</h2>
        <div className="contenedorintegrantes">
            <div className="cajaintegrante">
                <img src="images/Integranteuno.jpg" alt="Juan Román"/>

                <div>
                    <h2>
                        Juan Román Riquelme
                    </h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum nam praesentium qui,
                        incidunt
                        nesciunt est, officia quaerat natus dicta, enim dolores quod doloribus voluptatibus? Deserunt
                        omnis
                        numquam perspiciatis dolorum!
                    </h3>
                </div>
            </div>

            <div className="cajaintegrante">
                <img src="images/Integrantedos.jpg" alt="Juan Román"/>

                <div>
                    <h2>
                        Ricardo Bochini
                    </h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum nam praesentium qui,
                        incidunt
                        nesciunt est, officia quaerat natus dicta, enim dolores quod doloribus voluptatibus? Deserunt
                        omnis
                        numquam perspiciatis dolorum!
                    </h3>
                </div>
            </div>

            <div className="cajaintegrante">
                <img src="images/Integrantetres.jpg" alt="Juan Román"/>

                <div>
                    <h2>
                        Lionel Messi
                    </h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum nam praesentium qui,
                        incidunt
                        nesciunt est, officia quaerat natus dicta, enim dolores quod doloribus voluptatibus? Deserunt
                        omnis
                        numquam perspiciatis dolorum!
                    </h3>
                </div>
            </div>
        </div>




    </main>
    );
}
export default NosotrosPage;
import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';



export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>                                                                                                                                                                                                                                                 
        <div className={styles.content} id="position">
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        className={styles.aboutCursorIcon}
                        alt="Cursor icon"
                        id="a"
                        loading="eager"
                    />
                    <div className={styles.aboutItem} id="b">
                        <p>
Dedicated to the principle of continual learning, I navigate the realm of full stack development with fervor, particularly drawn to JavaScript, React, and the vibrant domain of web development. It's the fusion of creativity, problem-solving, and the ever-evolving tech landscape that fuels my excitement and keeps me hooked on the journey. </p>
                    </div>
                 <img
                src={getImageUrl("about/aboutImage.jpg")}
                alt="me sitting with a laptop"
                id="c"
                className={styles.aboutImage}/>
        </div>
    </section>;
};

import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';



export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>

        <img
            src={getImageUrl("about/cursorIcon.png")}
            className={styles.aboutCursorIcon}
            alt="Cursor icon"
            id="a"
            loading="lazy"
        />
        <div className={styles.content} id="position">
            <div className={styles.aboutItem} id="b">
                <p>
                    Dedicated to the principle of continual learning, I thrive as a full-stack developer passionate about building dynamic, user-friendly web applications. With expertise in JavaScript, React, Node.js, Express, and MongoDB, I embrace challenges that push me to grow and refine my craft. I’m driven by the intersection of technology, creativity, and problem-solving, constantly exploring new ways to optimize performance and enhance user experiences. My journey is fueled by curiosity, innovation, and the excitement of turning ideas into reality. </p>
            </div>
            <img
                src={getImageUrl("about/aboutImage.jpg")}
                alt="Causal photo of me"
                id="c"
                loading="lazy"
                className={styles.aboutImage} />
        </div>
    </section>;
};

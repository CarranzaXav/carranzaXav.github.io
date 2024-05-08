import React from 'react';
import styles from './Contact.module.css';

import { getImageUrl } from '../../utils';

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.title}>Contact</h2>
                < p > Feel free to reach out!</p >
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:carranzax7@gmail.com"> carranzax7@gmail.com</a></li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                    <a href="https://github.com/CarranzaXav">https://github.com/CarranzaXav</a></li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/xavier-carranza-458690218">LinkedIn</a></li>
            </ul>
        </footer >
    )
}

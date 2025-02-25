import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.title}>Contact</h2>
                < p > Feel free to reach out!</p >
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>

                    <a href="https://github.com/CarranzaXav">
                        <FontAwesomeIcon className={styles.contactIcon} icon={faGithub} />
                        <div>https://github.com/CarranzaXav</div>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="mailto:carranzax7@gmail.com">
                        <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} />
                        <div>carranzax7@gmail.com</div>
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/xavier-carranza-458690218">
                        <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} />
                        <div>Connect with me on LinkedIn</div>
                    </a>
                </li>

            </ul>
        </footer >
    )
}

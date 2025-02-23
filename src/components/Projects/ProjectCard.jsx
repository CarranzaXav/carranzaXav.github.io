import React from 'react';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => (
    <div className={styles.card}>
        <div className={styles.content}>

            <div className={styles.back}>
                <div className={styles.backContent}>

                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.img} />

                    <h3 className={styles.title}>{title}</h3>
                </div>
            </div>

            <div className={styles.front}>

                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.frontImage} />

                <div className={styles.frontContent}>

                    <div className={styles.description}>
                        <p>
                            {description}
                        </p>


                        {/* Skill list was here */}
                    </div>
                </div>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (<li key={id} className={styles.skill}>{skill}</li>);
                    })}
                </ul>
            </div>
        </div>
        <div className={styles.projectBtns}>
            <small>
                <a href={demo} className={styles.badge}>Demo</a>
            </small>

            <small>
                <a href={source} className={styles.badge}>Source</a>
            </small>
        </div>
    </div>
);

import React from 'react';

import styles from "./ProjectCard.module.css";
// import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => (
    <div className={styles.card}>
        <div className={styles.content}>

            <div className={styles.back}>
                <div className={styles.backContent}>

                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.img} />

                    <h3 className={styles.title}>{title}</h3>
                    {/* <div className={styles.container}>


        </div> */}
                </div>
            </div>

            <div className={styles.front}>

                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.frontImage} />

                <div className={styles.frontContent}>
                    <div className={styles.projectBtns}>
                        <small>
                            <a href={demo} className={styles.badge}>Demo</a>
                        </small>

                        <small>
                            <a href={source} className={styles.badge}>Source</a>
                        </small>
                    </div>

                    <div className={styles.description}>
                        <p>
                            {description}
                        </p>

                        <ul className={styles.skills}>
                            {skills.map((skill, id) => {
                                return (<li key={id} className={styles.skill}>{skill}</li>);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* From Uiverse.io by ElSombrero2 */
<div class="card">
    <div class="content">
        <div class="back">
            <div class="back-content">
                <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff"> {/*Pizza Icon */}

                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

                    <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>

                    <g id="SVGRepo_iconCarrier">


                    </g>

                </svg>
                <strong>Hover Me</strong>
            </div>
        </div>
        <div class="front">

            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>

            <div class="front-content">
                <small class="badge">Pasta</small>
                <div class="description">
                    <div class="title">
                        <p class="title">
                            <strong>Spaguetti Bolognese</strong>
                        </p>
                        <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p class="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
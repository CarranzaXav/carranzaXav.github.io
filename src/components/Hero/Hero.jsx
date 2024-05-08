import "../../vars.css";
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import styles from "./hero.module.css"
import { getImageUrl } from '../../utils';


export const Hero = () => {

    const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x ,
      y: mousePosition.y ,
    },
    text: {
      height: 300,
      width: 300,
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor:"var(--color-bg-light)",
      mixBlendMode: "screen"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


 return (
        <section className={styles.container}  onMouseMove={textEnter} onMouseLeave={textLeave}>
        
            <div className={styles.content} >
                <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
     />
                <h1 className={styles.title}> Hi, I'm Xavier</h1>
                <p className={styles.description}>I'm a full-stack developer with experience in CSS, JaveScript, React, Express and Node.<br/> Reach out if you'd like to learn more!!</p>
                <a href="mailto:carranzax7@gmail.com" className={styles.contactBtn}>Contact Me</a>
                
            </div>
            <img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" className={styles.heroImg} />
            {/* <div className={styles.heroImg}></div> */}
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

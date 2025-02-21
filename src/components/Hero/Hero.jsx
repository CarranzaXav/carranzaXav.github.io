import "../../vars.css";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./Hero.module.css";
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
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 200,
      width: 200,
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "var(--color-bg-light)",
      mixBlendMode: "screen"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <section id="home" className={styles.container} onMouseMove={textEnter} onMouseLeave={textLeave}>


      <div className={styles.content} >

        <motion.div
          className={styles.cursor}
          variants={variants}
          animate={cursorVariant}
        />

        <div className={styles.heroImgBlock}>
          <img src={getImageUrl("hero/heroImage.jpg")} alt="Causal photo of me" className={styles.heroImg} loading="lazy" />
        </div>

        <div className={styles.heroBio}>

          <h1 className={styles.title}> Hi, I'm Xavier </h1>

          <a href="mailto:carranzax7@gmail.com" className={styles.contactBtn}>
            <div>
              Contact Me
            </div>
          </a>

          <p className={styles.description}>
            Crafting seamless digital experiences, one line of code at a time.
            <br />
            As a full-stack developer, I'm passionate about building responsive and dynamic web applications that bring ideas to life.
            <br />Let’s connect and build something great!</p>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  )
}

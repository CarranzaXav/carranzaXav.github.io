import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import styles from './BackToTop.module.css';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (

        <FontAwesomeIcon
            onClick={scrollToTop}
            style={{
                display: isVisible ? 'block' : 'none'
            }} icon={faSquareCaretUp} className={styles.backToTopBtn} />
    )
}

export default BackToTop
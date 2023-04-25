import React from 'react'
// styles
import styles from "./index.module.scss";
// images
import PATTERNRAW from "../../assets/images/patternraw.png";

const VECTORBEER = () => {
  return (
    <section className={styles.pattern}>
      <img className={styles.pattern_img} src={PATTERNRAW} alt="pattern" title='nice pattern' />
    </section>
  )
}

export default VECTORBEER;
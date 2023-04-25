import React from 'react'
// styles 
import styles from "./index.module.scss";
// images
import RAW5 from "../../assets/images/row3.png";

const SECONDRAWIMG = () => {
  return (
    <section className={styles.secondraw}>
      <img className={styles.secondraw_img} src={RAW5} alt="pattern" title='nice pattern' />
    </section>
  )
}

export default SECONDRAWIMG;
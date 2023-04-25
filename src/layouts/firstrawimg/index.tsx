import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// images
import RAW4 from "../../assets/images/row4.png";

const FIRSTRAWIMG: FC = () => {
    return (
        <section className={styles.firstraw}>
            <img className={styles.firstraw_img} src={RAW4} alt="pattern" title='nice pattern' />
        </section>
    )
}

export default FIRSTRAWIMG;
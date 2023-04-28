import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// images
import SERTIFCATE1 from "../.././../../assets/images/certificate1.png";
import SERTIFCATE2 from "../.././../../assets/images/certificate2.png";
import SERTIFCATE3 from "../.././../../assets/images/certificate3.png";
import SERTIFCATE4 from "../.././../../assets/images/certificate4.png";

const CERTIFICATE: FC = () => {
    return (
        <section className={styles.ser}>
            <div className={styles.ser_container}>

                <h2 className={styles.ser_title}>Наш продукт сертифицирован</h2>

                <div className={styles.ser_img_container} >
                    <div className={styles.ser_img}><img src={SERTIFCATE1} alt="alco sertificate" /></div>
                    <div className={styles.ser_img}><img src={SERTIFCATE2} alt="alco sertificate" /></div>
                    <div className={styles.ser_img}><img src={SERTIFCATE3} alt="alco sertificate" /></div>
                    <div className={styles.ser_img}><img src={SERTIFCATE4} alt="alco sertificate" /></div>
                </div>
            </div>
        </section>
    )
}

export default CERTIFICATE
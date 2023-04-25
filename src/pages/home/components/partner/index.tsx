import React from 'react'
// styles
import styles from "./index.module.scss";
// components
import CONTACTFORM from './contactform';

const PARTNER = () => {
    return (
        <section className={styles.partner}>
            <div className={styles.partner_container}>
                <h2 className={styles.partner_title}>Сотрудничество с нами-это выгодно</h2>

                <div className={styles.partner_contact}>
                    <h3 className={styles.partner_contact_title}>
                        Станьте партнером <span className={styles.partner_contact_title_bold}>ALKOHOME</span> и получите <span className={styles.partner_contact_title_bold}>выгодные</span> цены на продукцию <span className={styles.partner_contact_title_bold}>высокого качества</span>! ОПТ от <span className={styles.partner_contact_title_bold}>1ой</span> коробки
                    </h3>

                    <CONTACTFORM />

                </div>
            </div>
        </section>
    )
}

export default PARTNER
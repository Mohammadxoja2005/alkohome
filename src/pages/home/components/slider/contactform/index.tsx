import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
import NEXTARROW from '../../../../../assets/icons/arrownext.png';

const CONTACTFORM: FC = () => {
    return (
        <form className={styles.form}>
            <h2 className={styles.form_title}>Получить оптовый прайс</h2>
            <input className={styles.form_input} type="text" placeholder='Ф.И.О.' />
            <input className={styles.form_input} type="text" placeholder='@-mail' />
            <input className={styles.form_input} type="text" placeholder='Телефон (не обязательно)' />

            <div className={styles.form_checkbox_container}>
                <input className={styles.form_checkbox} type="checkbox" />
                <label className={styles.form_chckbox_title} htmlFor="checkbox">Вы соглашаетесь с условиями обработки персональных данных</label>
            </div>

            <button onClick={(e) => e.preventDefault()} className={styles.form_btn}>Оставить заявку <span className={styles.form_btn_next_icon}><img src={NEXTARROW} alt="" /></span></button>
        </form>
    )
}

export default CONTACTFORM
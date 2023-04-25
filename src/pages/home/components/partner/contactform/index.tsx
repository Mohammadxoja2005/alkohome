import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import NEXTARROW from "../../../../../assets/icons/arrownext.png";

const CONTACTFORM: FC = () => {
    return (
        <form className={styles.form}>
            <input className={styles.form_input} type="text" placeholder='Ф.И.О.' />
            <input className={styles.form_input} type="text" placeholder='@-mail' />
            <input className={styles.form_input} type="text" placeholder='Телефон (не обязательно)' />

            <div className={styles.form_checkbox_container}>
                <input className={styles.form_checkbox} type="checkbox" />
                <label className={styles.form_chckbox_title} htmlFor="checkbox">Вы соглашаетесь с условиями обработки персональных данных</label>
            </div>

            <button onClick={(e) => e.preventDefault()} className={styles.form_btn}>Стать партнером <span className={styles.form_btn_next_icon}><img src={NEXTARROW} alt="" /></span></button>
        </form>
    )
}

export default CONTACTFORM;
import React, { FC } from 'react'
// styles
import styles from "./index.module.scss";
import NEXTARROW from '../../../../../assets/icons/arrownext.png';
// axios
import axios from "axios";

const CONTACTFORM: FC = () => {

    const onSubmit = (e: any) => {
        e.preventDefault();

        axios.post('https://formsubmit.co/info@alkohome.com ')
            .then((response) => {
                console.log(response);
            })

        axios.post('https://formsubmit.co/dannytseitlin@yandex.ru')
            .then((response) => {
                console.log(response);
            })
            .then(() => {
                window.location.reload();
            })
    }

    return (
        <form method="POST" className={styles.form}>
            <h2 className={styles.form_title}>Получить оптовый прайс</h2>

            <input className={styles.form_input} name="name" type="text" placeholder='Ф.И.О.' />
            <input className={styles.form_input} name="email" type="text" placeholder='@-mail' />
            <input className={styles.form_input} name="phone" type="text" placeholder='Телефон (обязательно)' />

            <div className={styles.form_checkbox_container}>
                <input className={styles.form_checkbox} type="checkbox" />
                <label className={styles.form_chckbox_title} htmlFor="checkbox">Вы соглашаетесь с условиями обработки персональных данных</label>
            </div>

            <button onClick={onSubmit} className={styles.form_btn}>Оставить заявку <span className={styles.form_btn_next_icon}><img src={NEXTARROW} alt="" /></span></button>
        </form>
    )
}

export default CONTACTFORM
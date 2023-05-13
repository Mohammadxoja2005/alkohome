import React, { FC, useState, useRef } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import NEXTARROW from "../../../../../assets/icons/arrownext.png";
// axios
import axios from "axios";

const CONTACTFORM: FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const sendBtn = useRef<HTMLButtonElement>(null);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if (name == '' || email == '' || phone == '') {
            alert("Все поля должны быть заполнены")
            return;
        } else {
            if (sendBtn.current != null) {
                sendBtn.current.innerHTML = 'Заявка отправлена';
                sendBtn.current.style.border = '3px solid #1D7044';
            }
        }

        const formData = {
            name: name,
            email: email,
            message: phone,
        }

        await axios.post('https://formsubmit.co/ajax/info@alkohome.com', formData, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).then((response) => {
            console.log(response)
        });

        await axios.post('https://formsubmit.co/ajax/dannytseitlin@yandex.ru', formData, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).then((res) => {
            setName('')
            setEmail('')
            setPhone('')
            window.location.reload();
        });
    }

    return (
        <form className={styles.form} action="https://formsubmit.co/muhammadxojadispatch@gmail.com" method="POST">
            <input className={styles.form_input} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder='Ф.И.О.' />
            <input className={styles.form_input} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder='@-mail' />
            <input className={styles.form_input} onChange={(e) => setPhone(e.target.value)} name="phone" type="text" placeholder='Телефон (обязательно)' />

            <div className={styles.form_checkbox_container}>
                <input className={styles.form_checkbox} type="checkbox" />
                <label className={styles.form_chckbox_title} htmlFor="checkbox">Вы соглашаетесь с условиями обработки персональных данных</label>
            </div>

            <button ref={sendBtn} type='submit' onClick={onSubmit} className={styles.form_btn}>Оставить заявку <span className={styles.form_btn_next_icon}><img src={NEXTARROW} alt="" /></span></button>
        </form>
    )
}

export default CONTACTFORM;
import React, { FC, Fragment } from 'react'
// styles 
import styles from "./index.module.scss";
// icons
import CALL from "../../assets/icons/bgcall.png";
import SMS from "../../assets/icons/bgsms.png";
import VK from "../../assets/icons/bgvk.png";
import TELEGRAM from "../../assets/icons/bgtelegram.png";
// layouts
import FIRSTRAWIMG from '../../layouts/firstrawimg';
import SECONDRAWIMG from '../seconrawimg';

const FOOTER: FC = () => {
    return (
        <Fragment> 
            <FIRSTRAWIMG />
            <section className={styles.footer}>
                <div className={styles.footer_container}>

                    <div className={styles.footer_navigation}>
                        <nav className={styles.footer_nav_links}>
                            <a className={styles.footer_nav_link} href="#">Главная</a>
                            <a className={styles.footer_nav_link} href="#">Каталог</a>
                            <a className={styles.footer_nav_link} href="#">Каталог</a>
                            <a className={styles.footer_nav_link} href="#">Контакты</a>
                            <a className={styles.footer_nav_link} href="#">Купить</a>
                        </nav>
                        <p className={styles.footer_document}>ИНН 7710912420 ОГРН 1127746354394 ООО «Деловой мир Москва»</p>
                    </div>

                    <div className={styles.footer_contact}>
                        <p className={styles.footer_contact_title}>Свяжитесь с нами</p>

                        <div className={styles.footer_contact_socials}>
                            <img src={CALL} alt="call" />
                            <img src={SMS} alt="sms" />
                            <img src={VK} alt="vk" />
                            <img src={TELEGRAM} alt="telegram" />
                        </div>
                    </div>
                </div>
            </section>
            <SECONDRAWIMG />
        </Fragment>
    )
}

export default FOOTER
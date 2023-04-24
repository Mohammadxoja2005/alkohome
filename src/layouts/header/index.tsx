import React from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../assets/icons/logo.png";
import LOGONAME from "../../assets/icons/logoname.png";
import TELEGRAM from "../../assets/icons/telegram.png";
import SMS from "../../assets/icons/sms.png";
import PHONE from "../../assets/icons/phone.png";
import VK from "../../assets/icons/vk.png";

const HEADER = () => {
    return (
        <header>
            <div className={styles.header_container}>
                <nav className={styles.header_navbar}>

                    {/* <div className={styles.header_logo}> */}
                        <a href="" className={styles.header_logo}>
                            <img src={LOGO} alt="alkohome" title='alkohome-logo' />
                            <img src={LOGONAME} alt="alkohome" title='alkhome-name' />
                        </a>
                    {/* </div> */}

                    <ul className={styles.header_menu}>
                        <li className={styles.header_menu_title}><a href="#" className={styles.header_menu_href} >Главная</a></li>
                        <li className={styles.header_menu_title}><a href="#" className={styles.header_menu_href} >Каталог</a></li>
                        <li className={styles.header_menu_title}><a href="#" className={styles.header_menu_href} >Отзывы</a></li>
                        <li className={styles.header_menu_title}><a href="#" className={styles.header_menu_href} >Контакты</a></li>
                        <li className={styles.header_menu_title}><a href="#" className={styles.header_menu_href} >Купить</a></li>
                    </ul>

                    <div className={styles.header_contact}>
                        <h3 className={styles.header_contact_name}>Свяжитесь с нами</h3>
                        <div className={styles.header_contact_socials}>
                            <img src={PHONE} alt="phone" title='call us' className={styles.header_social} />
                            <img src={SMS} alt="email" title='email us' className={styles.header_social} />
                            <img src={VK} alt="vk" title='we are on vk' className={styles.header_social} />
                            <img src={TELEGRAM} alt="telegram" title='we on telegram' className={styles.header_social} />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default HEADER;
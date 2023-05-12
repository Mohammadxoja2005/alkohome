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
// anchorlink
import AnchorLink from 'react-anchor-link-smooth-scroll'

const FOOTER: FC = () => {
    return (
        <Fragment>
            <FIRSTRAWIMG />
            <section className={styles.footer} id='contact'>
                <div className={styles.footer_container}>

                    <div className={styles.footer_navigation}>
                        <nav className={styles.footer_nav_links}>
                            <AnchorLink className={styles.footer_nav_link} href="#main">Главная</AnchorLink>
                            <AnchorLink className={styles.footer_nav_link} href="#catalog">Каталог</AnchorLink>
                            <AnchorLink className={styles.footer_nav_link} href="#review">Каталог</AnchorLink>
                            <AnchorLink className={styles.footer_nav_link} href="#contact">Контакты</AnchorLink>
                            <AnchorLink className={styles.footer_nav_link} href="#buy">Купить</AnchorLink>
                        </nav>
                        <p className={styles.footer_document}>ИНН 7710912420   ОГРН 1127746354394   ООО «Деловой мир Москва»
                            ТУ 10.89.13-001-09763834-2023</p>
                        <p className={styles.footer_document_for_contact}>Телефон  - 8 (495) 764-35-08  </p>
                        <p className={styles.footer_document_for_contact}> Почта – info@alkohome.com </p>

                    </div>

                    <div className={styles.footer_contact}>
                        <p className={styles.footer_contact_title}>Свяжитесь с нами</p>

                        <div className={styles.footer_contact_socials}>
                            <a target="_blank" href="tel:+998903580505"><img src={CALL} alt="phone" title='call us' className={styles.header_social} /></a>
                            <a target="_blank" href="mailto:example@example.com"><img src={SMS} alt="email" title='email us' className={styles.header_social} /></a>
                            <a target="_blank" href="https://vk.com/public219158476"><img src={VK} alt="vk" title='we are on vk' className={styles.header_social} /></a>
                            <a target='_blank' href="https://t.me/+jLtSnJ-3Ye80NGQy"><img src={TELEGRAM} alt="telegram" title='we on telegram' className={styles.header_social} /></a>
                        </div>
                    </div>
                </div>
            </section>
            <SECONDRAWIMG />
        </Fragment>
    )
}

export default FOOTER
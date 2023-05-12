import React, { Fragment, FC, useState } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../assets/icons/logo.png";
import LOGONAME from "../../assets/icons/logoname.png";
import TELEGRAM from "../../assets/icons/telegram.png";
import SMS from "../../assets/icons/sms.png";
import PHONE from "../../assets/icons/phone.png";
import VK from "../../assets/icons/vk.png";
import RAW1 from "../../assets/images/raw5.png";
import RAW6 from "../../assets/images/raw6.png";
import FLOWER from "../../assets/icons/flower.png";
import VECTORBEER from '../vectorbeer';
// anchor-link 
import AnchorLink from 'react-anchor-link-smooth-scroll'


const HEADER: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Fragment>
            <header className={styles.header_large_screen}>
                <div className={styles.header_container}>
                    <nav className={styles.header_navbar}>

                        <a href="/" className={styles.header_logo}>
                            <img src={LOGO} alt="alkohome" title='alkohome-logo' />
                            <img src={LOGONAME} alt="alkohome" title='alkhome-name' />
                        </a>

                        <ul className={styles.header_menu}>
                            <li className={styles.header_menu_title}><AnchorLink href="#main" className={styles.header_menu_href} >Главная</AnchorLink></li>
                            <li className={styles.header_menu_title}><AnchorLink href="#catalog" className={styles.header_menu_href} >Каталог</AnchorLink></li>
                            <li className={styles.header_menu_title}><AnchorLink href="#review" className={styles.header_menu_href} >Отзывы</AnchorLink></li>
                            <li className={styles.header_menu_title}><AnchorLink href="#contact" className={styles.header_menu_href} >Контакты</AnchorLink></li>
                            <li className={styles.header_menu_title}><AnchorLink href="#buy" className={styles.header_menu_href} >Купить</AnchorLink></li>
                        </ul>

                        <div className={styles.header_contact}>
                            <h3 className={styles.header_contact_name}>Свяжитесь с нами</h3>
                            <div className={styles.header_contact_socials}>
                                <a target="_blank" href="tel:+998903580505"><img src={PHONE} alt="phone" title='call us' className={styles.header_social} /></a>
                                <a target="_blank" href="mailto:example@example.com"><img src={SMS} alt="email" title='email us' className={styles.header_social} /></a>
                                <a target="_blank" href="https://vk.com/public219158476"><img src={VK} alt="vk" title='we are on vk' className={styles.header_social} /></a>
                                <a target='_blank' href="https://t.me/+jLtSnJ-3Ye80NGQy"><img src={TELEGRAM} alt="telegram" title='we on telegram' className={styles.header_social} /></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <header className={styles.header_small_screen}>
                <div className={styles.header_small_container}>
                    <a href="/" className={styles.header_logo}>
                        <img src={LOGO} alt="alkohome" title='alkohome-logo' />
                        <img src={LOGONAME} alt="alkohome" title='alkhome-name' />
                    </a>
                    <div className={styles.header_small_screen_trigger} onClick={() => setIsOpen(!isOpen)}>
                        <div className={styles.header_small_screen_line_f}></div>
                        <img src={FLOWER} alt="flower" />
                        <div className={styles.header_small_screen_line_s}></div>
                    </div>
                </div>

            </header>
            {isOpen ? <div className={styles.header_small_navbar}>
                <ul className={styles.header_menu_mobile}>
                    <li className={styles.header_menu_title}><AnchorLink href="#main" className={styles.header_menu_href} >Главная</AnchorLink></li>
                    <li className={styles.header_menu_title}><AnchorLink href="#catalog" className={styles.header_menu_href} >Каталог</AnchorLink></li>
                    <li className={styles.header_menu_title}><AnchorLink href="#review" className={styles.header_menu_href} >Отзывы</AnchorLink></li>
                    <li className={styles.header_menu_title}><AnchorLink href="#contact" className={styles.header_menu_href} >Контакты</AnchorLink></li>
                    <li className={styles.header_menu_title}><AnchorLink href="#buy" className={styles.header_menu_href} >Купить</AnchorLink></li>
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
            </div> : null}
            {/* <VECTORBEER /> */}

            <section className={styles.pattern}>
                <img src={RAW1} alt="pattern" className={styles.pattern_img} />
                <img src={RAW6} alt="pattern" className={styles.pattern_img_addition} />
            </section>
        </Fragment>
    )
}

export default HEADER;
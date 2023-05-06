import React, { FC, useState, useEffect, useRef } from 'react'
// styles
import styles from "./index.module.scss";
// images
import SERTIFCATE3 from "../.././../../assets/images/certificate3.png";
import SERTIFCATE4 from "../.././../../assets/images/certificate4.png";
// icons
import CLOSE from '../../../../assets/icons/close.svg';
import SEARCH from "../../../../assets/icons/search.svg";

const CERTIFICATE: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [imgPath, setImgPath] = useState<string>('');

    const serModal = useRef<HTMLDivElement>(null);
    const serModalImgContainer = useRef<HTMLDivElement>(null);
    const body = document.querySelector("body");

    if (isOpen) {
        body?.classList.add('stopScroll');
    }

    useEffect(() => {
        serModal.current?.addEventListener('click', (e: any) => {
            if (!serModalImgContainer.current?.contains(e.target)) {
                setIsOpen(false);
                body?.classList.remove('stopScroll');
            }
        })
    }, [isOpen]);

    return (
        <section className={styles.ser}>
            <div className={styles.ser_container}>

                <h2 className={styles.ser_title}>Наш продукт сертифицирован</h2>

                <div className={styles.ser_img_container} >
                    <div onClick={() => setIsOpen(true)} className={styles.ser_img}>
                        <img className={styles.ser_img_open} src={SEARCH} alt="open" />
                        <img className={styles.ser_img_img} onClick={(e: any) => setImgPath(e.target.src)} src={SERTIFCATE3} alt="alco sertificate" />
                    </div>
                    <div onClick={() => setIsOpen(true)} className={styles.ser_img}>
                        <img className={styles.ser_img_open} src={SEARCH} alt="open" />
                        <img className={styles.ser_img_img} onClick={(e: any) => setImgPath(e.target.src)} src={SERTIFCATE4} alt="alco sertificate" />
                    </div>
                    {/* <div onClick={() => setIsOpen(true)} className={styles.ser_img}><img onClick={(e: any) => setImgPath(e.target.src)} src={SERTIFCATE3} alt="alco sertificate" /></div>
                    <div onClick={() => setIsOpen(true)} className={styles.ser_img}><img onClick={(e: any) => setImgPath(e.target.src)} src={SERTIFCATE4} alt="alco sertificate" /></div> */}
                </div>
            </div>

            {isOpen ? <div ref={serModal} className={styles.ser_modal}>
                <img onClick={() => setIsOpen(false)} className={styles.ser_modal_close} src={CLOSE} alt="" />
                <div ref={serModalImgContainer} className={styles.ser_modal_img_container}>
                    <img className={styles.ser_modal_img} src={imgPath} alt="ser_img" />
                </div>
            </div> : null}

        </section>
    )
}

export default CERTIFICATE
import React, { Fragment, FC, useState, useEffect, useRef } from 'react';
// styles
import styles from "./index.module.scss";
// images
import PRODUCTLIST from "../../../../assets/images/product_6.png";
import ZERNS from "../../../../assets/images/product_1.png"
import FRUITS from "../../../../assets/images/product_2.png"
import SPIRTS from "../../../../assets/images/product_3.png"
import PRODUCT4 from "../../../../assets/images/product_4.png";
import PRODUCT5 from "../../../../assets/images/product_5.png";
// layouts 
import VECTORBEER from '../../../../layouts/vectorbeer';
// icons
import CLOSE from "../../../../assets/icons/close.svg";

const PRODUCT: FC = () => {
    const data: Array<{ id: number, name: string, description: string, img: string }> = [
        {
            id: 1,
            name: 'Зерновые',
            description: 'Дрожжи для зерновых браг позволяют легко и просто  получить зерновые напитки дома - из солодовых концентратов и осахаренных зерновых (пшеница, рис, кукуруза, гречиха и другой крупы)',
            img: ZERNS
        },
        {
            id: 2,
            name: 'Фруктовые экстра',
            description: 'незаменимы для получения ароматных напитков: виски, коньяк, портвейн, херес, кальвадос, бренди, чача и др. Штамм отличается от других прежде всего способностью сохранять аромат исходного сырья. Готовить напитки на них — просто сказка.',
            img: FRUITS
        },
        {
            id: 3,
            name: '48 Спиртовые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи. Славятся своей универсальностью, неприхотливостью и невероятно быстрыми и качественными результатами брожения. Дрожжи ALKOHOME 48 гарантированно сбродят любой материал за 48 часов при соблюдении инструкции.',
            img: SPIRTS
        },
        {
            id: 4,
            name: 'С Активной добавкой',
            description: 'Спиртовые с активной подкормкой -Активные сухие дрожжи ALKOHOME изготовлены из специально отобранного высококачественного штамма спиртовых дрожжей и специальной смеси из минералов, витаминов и питательных веществ. Славятся своей универсальностью, неприхотливостью и невероятно качественными результатами брожения. Дрожжи гарантированно сбродят любой материал за 7 дней с осветлением. Спиртовые дрожжи ALKOHOME применяются для сбраживания сахарных браг, глюкозы, фруктозы и других моно и полисахаридов.',
            img: PRODUCT4
        },
        {
            id: 5,
            name: 'Дрожжи спиртовые',
            description: 'Спиртовые - Активные сухие дрожжи ALKOHOME изготовлены из специально отобранного высококачественного штамма спиртовых дрожжей и специальной смеси из минералов, витаминов и питательных веществ. Спиртовые дрожжи ALKOHOME применяются для сбраживания сахарных браг, глюкозы, фруктозы и других моно и полисахаридов.',
            img: PRODUCT5
        },
        {
            id: 6,
            name: 'Мегапак Турбо дрожжи 48',
            description: 'Мегапак Турбо дрожжи ALKOHOME 48 спиртовые. Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся своей универсальностью, неприхотливостью и невероятно быстрыми и качественными результатами брожения. Дрожжи ALKOHOME 48 гарантированно сбродят любой материал за 48 часов при соблюдении инструкции.',
            img: PRODUCTLIST
        },
    ]

    const [name, setName] = useState<string>('');
    const [des, setDes] = useState<string>('');
    const [hoveredElement, setHoveredElement] = useState<number | null>(null);

    const submitInfo = (name: string, description: string): void => {
        setName(name)
        setDes(description)
    }

    const onClose = (): void => {
        setName('')
        setDes('')
    }

    const productModal = useRef<HTMLDivElement>(null);
    const productModalContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (productModal.current === undefined) {
            return;
        }

        const body = document.querySelector('body');

        if (name.length > 0 && des.length > 0) {
            body?.classList.add('stopScroll');
        } else {
            body?.classList.remove('stopScroll');
        }

        productModalContainer.current?.addEventListener('click', (e: any) => {
            if (!productModal.current?.contains(e.target)) {
                setName('')
                setDes('')
            }
        })

    }, [name])

    return (
        <Fragment>
            <section className={styles.product} id='catalog'>
                <div className={styles.product_container}>
                    <h2 className={styles.product_title}>О нашем продукте</h2>

                    <div className={styles.product_list}>
                        {data && data.map(product => {
                            const isHovered = hoveredElement === product.id;
                            return (
                                <div
                                    key={product.id}
                                    className={styles.product_single}
                                >
                                    <img className={styles.product_single_img} src={product.img} alt="" />
                                    <h3 className={styles.product_single_name}>{product.name}</h3>

                                    {isHovered ?

                                        <p
                                            onMouseLeave={() => setHoveredElement(null)}
                                            className={styles.product_single_des}>
                                            {product.description}
                                        </p> :

                                        <p className={styles.product_single_des}>
                                            {product.description.slice(0, 90)}.

                                            <span
                                                style={{ cursor: "pointer", fontWeight: "bold", marginLeft: "4px"}}
                                                onMouseEnter={() => setHoveredElement(product.id)}
                                                className={styles.product_single_des}>Читать дальше...</span>
                                        </p>}


                                    <div className={styles.product_single_detail_btn} onClick={() => submitInfo(product.name, product.description)}>
                                        Подробнее
                                    </div>
                                </div>
                            )
                        })}
                        {name != '' && des != '' ?
                            <div ref={productModalContainer} className={styles.product_modal_container}>
                                <div ref={productModal} className={styles.product_modal} data-modal="product_modal">
                                    <div className={styles.product_modal_close_name_container}>
                                        <div></div>
                                        <h3 className={styles.product_modal_title}>{name}</h3>
                                        <img className={styles.product_modal_close} onClick={() => onClose()} style={{ cursor: "pointer" }} src={CLOSE} alt="close modal" />
                                    </div>
                                    <p className={styles.product_modal_des}>{des}</p>
                                </div>
                            </div> : null}
                    </div>
                </div>
            </section>
            <VECTORBEER />
        </Fragment>
    )
}

export default PRODUCT;
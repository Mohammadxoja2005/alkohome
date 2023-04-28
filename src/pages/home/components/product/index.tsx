import React, { Fragment, FC, useState, useEffect, useRef } from 'react';
// styles
import styles from "./index.module.scss";
// images
import PRODUCTLIST from "../../../../assets/images/product.png";
import ZERNS from "../../../../assets/images/zerns.png"
import FRUITS from "../../../../assets/images/fruits.png"
import SPIRTS from "../../../../assets/images/spirts.png"
// layouts 
import VECTORBEER from '../../../../layouts/vectorbeer';
// icons
import CLOSE from "../../../../assets/icons/close.svg";

const PRODUCT: FC = () => {
    const data: Array<{ id: number, name: string, description: string, img: string }> = [
        {
            id: 1,
            name: 'Зерновые',
            description: 'Незаменимы для получения ароматных напитков: виски, коньяк, портвейн, херес, кальвадос, бренди, чача и др. Штамм отличается от других прежде всего способностью сохранять аромат исходного сырья. Готовить напитки на них',
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
            name: 'Спиртовые',
            description: 'Активные сухие дрожжи ALKOHOME изготовлены из специально отобранного высококачественного штамма спиртовых дрожжей и специальной смеси из минералов, витаминов и питательных веществ. Спиртовые дрожжи ALKOHOME применяются для сбраживания сахарных браг, глюкозы, фруктозы и других моно и полисахаридов.',
            img: SPIRTS
        },
        {
            id: 4,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
        {
            id: 5,
            name: 'Турбо Зерновые',
            description: 'Дрожжи для зерновых браг позволяют легко и просто  получить зерновые напитки дома - из солодовых концентратов и осахаренных зерновых (пшеница, рис, кукуруза, гречиха и другой крупы)',
            img: PRODUCTLIST
        },
        {
            id: 6,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
    ]

    const [name, setName] = useState<string>('');
    const [des, setDes] = useState<string>('');

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
                            return (
                                <div key={product.id} className={styles.product_single}>
                                    <img className={styles.product_single_img} src={product.img} alt="" />
                                    <h3 className={styles.product_single_name}>{product.name}</h3>
                                    <p className={styles.product_single_des}>
                                        {product.description.slice(0, 90)}...
                                    </p>
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
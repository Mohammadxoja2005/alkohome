import React, { Fragment, FC } from 'react'
// styles
import styles from "./index.module.scss";
// images
import PRODUCTLIST from "../../../../assets/images/product.png";
// layouts 
import VECTORBEER from '../../../../layouts/vectorbeer';

const PRODUCT: FC = () => {

    const data: Array<{ id: number, name: string, description: string, img: string }> = [
        {
            id: 1,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
        {
            id: 2,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
        {
            id: 3,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
        {
            id: 4,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
        {
            id: 5,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
        {
            id: 6,
            name: 'Зерновые',
            description: 'Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся',
            img: PRODUCTLIST
        },
    ]

    return (
        <Fragment>
            <section className={styles.product}>
                <div className={styles.product_container}>
                    <h2 className={styles.product_title}>О нашем продукте</h2>

                    <div className={styles.product_list}>
                        {data && data.map(product => {
                            return (
                                <div key={product.id} className={styles.product_single}>
                                    <img className={styles.product_single_img} src={product.img} alt="" />
                                    <h3 className={styles.product_single_name}>{product.name}</h3>
                                    <p className={styles.product_single_des}>
                                        {product.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <VECTORBEER />
        </Fragment>
    )
}

export default PRODUCT;
import React, { Fragment } from 'react'
// styles
import styles from "./index.module.scss";
// images
import PRODUCTLIST from "../../../../assets/images/product.png";
// layouts 
import VECTORBEER from '../../../../layouts/vectorbeer';

const PRODUCT = () => {
    return (
        <Fragment>
            <section className={styles.product}>
                <div className={styles.product_container}>
                    <h2 className={styles.product_title}>О нашем продукте</h2>

                    <div className={styles.product_list}>
                        {[1, 2, 3, 4].map(() => {
                            return (
                                <div className={styles.product_single}>
                                    <img className={styles.product_single_img} src={PRODUCTLIST} alt="" />
                                    <h3 className={styles.product_single_name}>Зерновые</h3>
                                    <p className={styles.product_single_des}>
                                        Дрожжи для самогона, для сахарных браг, спиртовые, мощные спиртоустойчивые дрожжи.Славятся
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
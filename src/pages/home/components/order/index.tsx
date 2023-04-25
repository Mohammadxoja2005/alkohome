import React, { FC } from "react";
// styles
import styles from "./index.module.scss";
// images
import WILDBERRIES from "../../../../assets/images/wildberries.png"
import OZON from "../../../../assets/images/yandexmarket.png"
import YANDEXMARKET from "../../../../assets/images/ozon.png"


const ORDER: FC = () => {

    const products: Array<{ id: number, name: string, img: string }> = [
        {
            id: 1,
            name: 'Wildberries',
            img: WILDBERRIES,

        },
        {
            id: 2,
            name: 'Yandex Market',
            img: YANDEXMARKET,

        },
        {
            id: 3,
            name: 'Ozon',
            img: OZON,

        },
    ]

    return (
        <section className={styles.order}>
            <div className={styles.order_container} >
                <h2 className={styles.order_title}>Купить в розницу</h2>

                <div className={styles.order_list}>
                    {products && products.map((product) => {
                        return (
                            <div key={product.id} className={styles.order_product}>
                                <h3 className={styles.order_product_title}>{product.name}</h3>
                                <img className={styles.order_product_img} src={product.img} alt="" />
                                <div className={styles.order_product_btn}>Заказать</div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default ORDER;
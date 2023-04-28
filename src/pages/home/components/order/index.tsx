import React, { FC, Fragment } from "react";
// styles
import styles from "./index.module.scss";
// images
import WILDBERRIES from "../../../../assets/images/wildberries.png"
import OZON from "../../../../assets/images/yandexmarket.png"
import YANDEXMARKET from "../../../../assets/images/ozon.png"
// layouts
import VECTORBEER from "../../../../layouts/vectorbeer";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

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
        <Fragment>
            <section className={styles.order} id="buy">
                <div className={styles.order_container}>
                    <h2 className={styles.order_title}>Купить в розницу</h2>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            798: {
                                slidesPerView: 3
                            }, 
                            480: {
                                slidesPerView: 2.2
                            },
                            0: {
                                slidesPerView: 1.2
                            }
                        }}
                        className={styles.order_list}>
                        {products && products.map((product) => {
                            return (
                                <SwiperSlide>
                                    <div key={product.id} className={styles.order_product}>
                                        <h3 className={styles.order_product_title}>{product.name}</h3>
                                        <img className={styles.order_product_img} src={product.img} alt="" />
                                        <div className={styles.order_product_btn}>Заказать</div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    {/* <div className={styles.order_list}>
                        {products && products.map((product) => {
                            return (
                                <div key={product.id} className={styles.order_product}>
                                    <h3 className={styles.order_product_title}>{product.name}</h3>
                                    <img className={styles.order_product_img} src={product.img} alt="" />
                                    <div className={styles.order_product_btn}>Заказать</div>
                                </div>
                            )
                        })}
                    </div> */}

                </div>
            </section>
            <VECTORBEER />
        </Fragment>
    )
}

export default ORDER;
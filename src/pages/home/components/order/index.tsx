import React, { FC, Fragment } from "react";
// styles
import styles from "./index.module.scss";
// images
import WILDBERRIES from "../../../../assets/images/wildberries.png"
import OZON from "../../../../assets/images/ozon.png"
import YANDEXMARKET from "../../../../assets/images/yandexmarket.png"
// layouts
import VECTORBEER from "../../../../layouts/vectorbeer";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const ORDER: FC = () => {

    const products: Array<{ id: number, name: string, img: string, link: string }> = [
        {
            id: 1,
            name: 'Wildberries',
            img: WILDBERRIES,
            link: "https://www.wildberries.ru/brands/alkohome"

        },
        {
            id: 2,
            name: 'Yandex Market',
            img: YANDEXMARKET,
            link: "https://market.yandex.ru/product--turbo-drozhzhi-48-100gr/1858077081?sku=102014744113&cpa=1"
        },
        {
            id: 3,
            name: 'Ozon',
            img: OZON,
            link: "https://www.ozon.ru/brand/alkohome-100860826/"
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
                                        <a target="_blank" className={styles.order_product_btn} href={product.link}>Заказать</a>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </section>
            <VECTORBEER />
        </Fragment>
    )
}

export default ORDER;
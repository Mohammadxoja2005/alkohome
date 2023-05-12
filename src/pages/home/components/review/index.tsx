import React, { FC, Fragment } from 'react';
import styles from './index.module.scss';
import BUILDING from '../../../../assets/images/buildin.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
// icons
import NEXT from "../../../../assets/icons/next.png";
import PREV from "../../../../assets/icons/prev.svg";
import STAR from "../../../../assets/icons/star.png";
import DATE from "../../../../assets/icons/date.png";
import TIME from "../../../../assets/icons/time.png";
import YANDEXREVIEW from "../../../../assets/icons/yandex_review.png";
import OZON_REVIEW from "../../../../assets/icons/ozon_review.png";
import WILDBERRIES_REVIEW from "../../../../assets/icons/wildberries_review.png";
// layouts
import VECTORBEER from '../../../../layouts/vectorbeer';

import 'swiper/css/navigation';
import 'swiper/css';

SwiperCore.use([Autoplay, Navigation]);

const REVIEW: FC = () => {

    const data: Array<{ id: number, name: string, organization: string, text: string, date: string, time: string, img: string, }> = [
        {
            id: 1,
            name: "Аркадий",
            organization: "",
            text: "Топовые дрожи, рекомендую",
            time: "22:30",
            date: "15.02",
            img: OZON_REVIEW
        },
        {
            id: 2,
            name: "Владимир",
            organization: "",
            text: "Всё супер",
            time: "11:33",
            date: "19.02",
            img: WILDBERRIES_REVIEW
        },
        {
            id: 3,
            name: "Дмитрий",
            organization: "",
            text: "Дрожжи Бомбические взял их для пробы и не прогадал, начинают работать через 30 мин",
            time: "12:50",
            date: "19.03",
            img: YANDEXREVIEW
        },
        {
            id: 4,
            name: "Александр",
            organization: "",
            text: "Уже работают и радуют!",
            time: "13:48",
            date: "21.03",
            img: WILDBERRIES_REVIEW
        },
    ]

    return (
        <Fragment>
            <section className={styles.rev} id='review'>
                <div className={styles.rev_container}>
                    <h2 className={styles.rev_title}>Наши клиенты говорят о нас</h2>
                    <div className={styles.rev_container_aligns}>
                        <div className={styles.prev_button}><img src={PREV} alt="prev" /></div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            navigation={{
                                prevEl: `.${styles.prev_button}`,
                                nextEl: `.${styles.next_button}`,
                            }}

                            className={styles.rev_slider}
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1.2,
                                },
                                480: {
                                    slidesPerView: 1,
                                }
                                // when window width is >= 1024px
                            }}
                        >
                            {data.map(review => {
                                return (
                                    <SwiperSlide>
                                        <div key={review.id} className={styles.rev_card}>
                                            <div className={styles.rev_card_profile}>
                                                <div className={styles.rev_card_img_container}>
                                                    <img
                                                        src={review.img}
                                                        alt="building"
                                                        className={styles.ref_card_img}
                                                    />
                                                </div>
                                                <div className={styles.ref_card_info}>
                                                    <h3 className={styles.ref_profile_fullname}>
                                                        {review.name}
                                                    </h3>
                                                    <div className={styles.rev_profile_star}>
                                                        {[1, 2, 3, 4, 5].map(() => {
                                                            return (
                                                                <img src={STAR} alt="review star of alkohome" />
                                                            )
                                                        })}
                                                    </div>

                                                    <div className={styles.ref_profile_job}>
                                                        {/* {review.organization} */}
                                                        <div className={styles.rev_profile_date}>
                                                            <img src={DATE} alt="" />
                                                            <p>{review.date}</p>
                                                        </div>
                                                        <div className={styles.rev_profile_date}>
                                                            <img src={TIME} alt="" />
                                                            <p>{review.time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.rev_card_des}>
                                                {review.text}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className={styles.next_button}><img src={NEXT} alt="next" /></div>
                    </div>
                </div>
            </section>
            <VECTORBEER />
        </Fragment>
    );
};

export default REVIEW;

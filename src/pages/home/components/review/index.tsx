import React, { FC, Fragment } from 'react';
import styles from './index.module.scss';
import BUILDING from '../../../../assets/images/buildin.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
// icons
import NEXT from "../../../../assets/icons/next.png"
import PREV from "../../../../assets/icons/prev.svg"
// layouts
import VECTORBEER from '../../../../layouts/vectorbeer';

import 'swiper/css/navigation';
import 'swiper/css';

SwiperCore.use([Autoplay, Navigation]);

const REVIEW: FC = () => {
    return (
        <Fragment>
            <section className={styles.rev}>
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
                            {[1, 2, 3].map(() => {
                                return (
                                    <SwiperSlide>
                                        <div className={styles.rev_card}>
                                            <div className={styles.rev_card_profile}>
                                                <div className={styles.rev_card_img_container}>
                                                    <img
                                                        src={BUILDING}
                                                        alt="building"
                                                        className={styles.ref_card_img}
                                                    />
                                                </div>
                                                <div className={styles.ref_card_info}>
                                                    <h3 className={styles.ref_profile_fullname}>
                                                        Имя Фамилия
                                                    </h3>
                                                    <h4 className={styles.ref_profile_job}>
                                                        Организация/Сфера деятельности
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className={styles.rev_card_des}>
                                                Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                                Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                                                Текст Текст
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

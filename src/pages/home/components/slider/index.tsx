import React, { FC, useEffect } from "react";
import styles from "./index.module.scss";
// images
import SLIDER1 from "../../../../assets/images/slider_1.png";
import SLIDER2 from "../../../../assets/images/slider_2.png";
import SLIDER3 from "../../../../assets/images/slider_3.png";
import SLIDERPATTERN from "../../../../assets/images/slider_prtrn.png"
// components
import CONTACTFORM from "./contactform";
// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

const arrOfSlides: Array<{ id: number, img: string }> = [
    {
        id: 1,
        img: SLIDER2,
    },
    {
        id: 2,
        img: SLIDER3
    },
    {
        id: 3,
        img: SLIDER1
    },
]

const SLIDER: FC = () => {
    useEffect(() => {

        const slides = document.querySelectorAll('[data-name="slide"]');

        if (slides == undefined) {
            return;
        }

        const arr = [0, 1, 2];

        const active = document.getElementsByClassName(styles.slider_slide_active);
        const prevBtn = document.querySelectorAll('[data-btn="prev-btn"]');
        const nextBtn = document.querySelectorAll('[data-btn="next-btn"]');

        slides[arr[2]].classList.add(styles.slider_slide_prev);
        slides[arr[1]].classList.add(styles.slider_slide_active);
        slides[arr[0]].classList.add(styles.slider_slide_next);

        setInterval(() => {
            slides[arr[1]].classList.remove(styles.slider_slide_prev);
            slides[arr[2]].classList.remove(styles.slider_slide_active);
            slides[arr[0]].classList.remove(styles.slider_slide_next);

            const number: any = arr.shift();
            arr.push(number);

            slides[arr[1]].classList.add(styles.slider_slide_prev);
            slides[arr[2]].classList.add(styles.slider_slide_active);
            slides[arr[0]].classList.add(styles.slider_slide_next);
        }, 2000)

        // console.log(arr);

        // nextBtn[0].addEventListener('click', (e) => {
        //     e.preventDefault();
        //     if (active[0].nextElementSibling) {

        //         console.log('there is next sibling')

        //         active[0].classList.add(styles.slider_slide_prev);
        //         active[0].nextElementSibling.classList.add(styles.slider_slide_active);
        //         // active[0].previousElementSibling.classList.add(styles.slider_slide_active);
        //     }

        // })

        // prevBtn[0].addEventListener('click', (e) => {
        //     e.preventDefault();
        // })


    }, [])

    return (
        <section className={styles.slider} id="main">
            <img src={SLIDERPATTERN} alt="pattern" className={styles.slider_pattern} />
            <div className={styles.slider_container}>
                <div className={styles.slider_slides}>
                    {arrOfSlides.map((slide) => {
                        return (
                            <div key={slide.id} data-name="slide">
                                <img src={slide.img} alt="" className={styles.slider_slide_img} />
                            </div>
                        )
                    })

                    }

                </div>

                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={5}
                    autoplay={{ delay: 3000 }}
                    className={styles.swiper_slide}>
                    {arrOfSlides.map((slide) => {
                        return (
                            <SwiperSlide>
                                <div key={slide.id} className={styles.swiper_slide_div}>
                                    <img src={slide.img} alt="" className={styles.swiper_slide_img} />
                                </div>
                            </SwiperSlide>
                        )
                    })

                    }
                </Swiper>

                <CONTACTFORM />
            </div>
        </section >
    )
}

export default SLIDER;


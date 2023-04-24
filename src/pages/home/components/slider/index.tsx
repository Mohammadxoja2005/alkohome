import React, { FC, useEffect } from "react";
import styles from "./index.module.scss";
// images
import SLIDER1 from "../../../../assets/images/slider1.png";
import SLIDER2 from "../../../../assets/images/slider2.png";
import SLIDER3 from "../../../../assets/images/slider3.png";
// components
import CONTACTFORM from "./contactform";
// swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

const arrOfSlides: any = [
    {
        img: SLIDER2,
        class: styles.slider_slide_prev
    },
    {
        img: SLIDER3
    },
    {
        img: SLIDER1
    },
]

const SLIDER: FC = () => {

    useEffect(() => {

        // const data = [SLIDER1, SLIDER2, SLIDER3]; 

        const slides = document.querySelectorAll('[data-name="slide"]');

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
        <section className={styles.slider}>
            <div className={styles.slider_container}>

                {/* <Swiper
                    effect={'coverflow'}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    loop={true}
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        el: styles.swiper_pagination,
                        clickable: true,
                        // bulletClass: styles.swiper_pagination_bullet,

                    }}
                    observer={true}
                    observeParents={true}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiper_slide} ><img src={SLIDER1} alt="" className={styles.slider_slide_img} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide} ><img src={SLIDER2} alt="" className={styles.slider_slide_img} /></SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide} ><img src={SLIDER3} alt="" className={styles.slider_slide_img} /></SwiperSlide>
                </Swiper> */}

                <div className={styles.slider_slides}>

                    <div data-name="slide" >
                        <img src={SLIDER2} alt="" className={styles.slider_slide_img} />
                    </div>
                    <div data-name="slide">
                        <img src={SLIDER3} alt="" className={styles.slider_slide_img} />
                    </div>
                    <div data-name="slide">
                        <img src={SLIDER1} alt="" className={styles.slider_slide_img} />
                    </div>
                </div>

                <CONTACTFORM />
            </div>
            <button data-btn="prev-btn">prev</button>
            <button data-btn="next-btn">next</button>
        </section>
    )
}

export default SLIDER;


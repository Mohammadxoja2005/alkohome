import React, { FC, Fragment } from 'react';
// styles 
import styles from "./index.module.scss";
// icons
import ARROW from "../../../../assets/icons/arrow.png";
// images
import STEP1 from "../../../../assets/images/step1.png";
import STEP2 from "../../../../assets/images/step2.png";
import STEP3 from "../../../../assets/images/step3.png";
import STEP4 from "../../../../assets/images/step4.png";

const STEP: FC = () => {
    return (
        <Fragment>
            <section className={styles.step}>
                <div className={styles.step_container} >
                    <h2 className={styles.step_title}>Всего 4 шага для сотрудничества</h2>

                    <div className={styles.step_detail}>
                        <div className={styles.step_detail_info_container}>
                            <div className={styles.step_detail_info}>
                                <div className={styles.step_detail_info_name} style={{ backgroundImage: `url("${STEP1}")` }}>
                                    Шаг 1
                                </div>
                                <p className={styles.step_detail_info_title}>Заказ</p>
                            </div>
                            <img src={ARROW} alt="" />
                        </div>

                        <div className={styles.step_detail_info_container}>
                            <div className={styles.step_detail_info}>
                                <div className={styles.step_detail_info_name} style={{ backgroundImage: `url("${STEP2}")` }}>
                                    Шаг 2
                                </div>
                                <p className={styles.step_detail_info_title}>Вам выставляется счет</p>
                            </div>
                            <img src={ARROW} alt="" />
                        </div>

                        <div className={styles.step_detail_info_container}>
                            <div className={styles.step_detail_info}>
                                <div className={styles.step_detail_info_name} style={{ backgroundImage: `url("${STEP3}")` }}>
                                    Шаг 3
                                </div>
                                <p className={styles.step_detail_info_title}>Оплата заказа</p>
                            </div>
                            <img src={ARROW} alt="" />
                        </div>

                        <div className={styles.step_detail_info_container}>
                            <div className={styles.step_detail_info}>
                                <div className={styles.step_detail_info_name} style={{ backgroundImage: `url("${STEP4}")` }}>
                                    Шаг 4
                                </div>
                                <p className={styles.step_detail_info_title}>Заказ отправляется вместе с документами</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default STEP;
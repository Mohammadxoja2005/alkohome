import React, { Fragment, FC, useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

// layouts
import HEADER from '../../layouts/header';
// components
import SLIDER from './components/slider';
import ORDER from './components/order';
import PRODUCT from './components/product';
import CERTIFICATE from './components/certificate';
import REVIEW from './components/review';
import PARTNER from './components/partner';
import STEP from './components/step';
import FOOTER from '../../layouts/footer';

const HOME: FC = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    window.addEventListener('resize', function () {
        setScreenWidth(window.innerWidth);
    });

    return (
        <HelmetProvider>
            <Fragment>
                <Helmet>
                    <title>Alkohome</title>
                    <meta name="Основная страница" content="Добро пожаловать на наш сайт Alkohome - ваш идеальный источник всего, что связано с алкоголем. Откройте для себя огромное разнообразие спиртных напитков, полезных советов и вдохновения для того, чтобы исследовать и расширить свои знания о мире алкоголя. Мы предлагаем экспертную информацию, форумы для общения с сообществом, и все, что необходимо, чтобы ваш путь в алкогольном мире стал настоящим удовольствием. Присоединяйтесь к нам сегодня и начните свое путешествие!" />
                    <link rel="canonical" href="/" />
                </Helmet>
                <HEADER />
                <SLIDER />
                <ORDER />
                <PRODUCT />
                <CERTIFICATE />
                <REVIEW />
                {screenWidth <= 480 ?
                    <>
                        <STEP />
                        <PARTNER />
                    </> :
                    <>
                        <PARTNER />
                        <STEP />
                    </>

                }

                <FOOTER />
            </Fragment>
        </HelmetProvider>
    )
}

export default HOME;
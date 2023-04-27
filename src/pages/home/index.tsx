import React, { Fragment, FC } from 'react';
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
    return (
        <Fragment>
            {/* <HEADER /> */}
            <SLIDER />
            {/* <ORDER />
            <PRODUCT /> */}
            {/* <CERTIFICATE /> */}
            {/* <REVIEW />
            <PARTNER />
            <STEP />
            <FOOTER /> */}
        </Fragment>
    )
}

export default HOME;
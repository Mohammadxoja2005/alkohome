import React, { Fragment, FC } from 'react';
// layouts
import HEADER from '../../layouts/header';
// components
import SLIDER from './components/slider';
import ORDER from './components/order';
import PRODUCT from './components/product';

const HOME: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <SLIDER />
            <ORDER />
            <PRODUCT />
        </Fragment>
    )
}

export default HOME;
import React, { Fragment, FC } from 'react';
// layouts
import HEADER from '../../layouts/header';
// components
import SLIDER from './components/slider';
import ORDER from './components/order';

const HOME: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <SLIDER />
            <ORDER />
        </Fragment>
    )
}

export default HOME;
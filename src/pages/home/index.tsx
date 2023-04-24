import React, { Fragment, FC } from 'react';
// layouts
import HEADER from '../../layouts/header';
import SLIDER from './components/slider';

const HOME: FC = () => {
    return (
        <Fragment>
            <HEADER />
            <SLIDER />
        </Fragment>
    )
}

export default HOME;
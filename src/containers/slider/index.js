import React from 'react';

import LoadSlidesController from '../../controllers/load-slides/index';
import SliderView from './views/index';

const Slider = () => <LoadSlidesController view={props => <SliderView {...props}/>}/>;

export default Slider;

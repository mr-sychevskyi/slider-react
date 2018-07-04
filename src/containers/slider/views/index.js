import React, {Component} from 'react';

import './style.scss';

import Slide from '../../../components/slide';
import ButtonIcon from '../../../components/button-icon';

class SliderView extends Component {
    state = {
        currentSlide: 0,
        autoplay: true
    };

    componentDidMount() {
        this.interval = setInterval(this.autoplay, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    autoplay = () => {
        const {autoplay} = this.state;

        if (autoplay) {
            this.nextSlide();
        }
    };

    nextSlide = () => {
        const {slides} = this.props;
        const {currentSlide} = this.state;

        this.setState({
            currentSlide: currentSlide === slides.length - 1 ? 0 : this.state.currentSlide + 1
        });
    };

    prevSlide = () => {
        const {slides} = this.props;
        const {currentSlide} = this.state;

        this.setState({
            currentSlide: currentSlide === 0 ? slides.length - 1 : this.state.currentSlide - 1
        });
    };

    hoverOn = () => {
        this.setState({
            autoplay: false
        });
    };

    hoverOff = () => {
        this.setState({
            autoplay: true
        });
    };

    render() {
        const {slides} = this.props;
        const {currentSlide} = this.state;

        return (
            <div className="slider" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <div className="slider-inner">
                    <ul className="slider-inner__list">
                        {slides.map((item, i) =>
                            <Slide key={item._id.$oid} slide={item} isCurrent={currentSlide === i}/>)};
                    </ul>
                </div>

                <ButtonIcon action={this.prevSlide} type="chevron_left" class="prev"/>
                <ButtonIcon action={this.nextSlide} type="chevron_right" class="next"/>
            </div>
        );
    }
}

export default SliderView;

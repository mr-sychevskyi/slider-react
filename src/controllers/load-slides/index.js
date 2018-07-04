import React, {Component} from 'react';

import {connect} from 'react-redux';

import {loadSlides} from './services/actions';
import Loader from '../../components/loader';

class LoadSlidesController extends Component {
    componentDidMount() {
        this.props.loadSlides();
    }

    render() {
        const {slides, isLoading, view} = this.props;

        if (!isLoading) {
            return <Loader/>;
        }

        return slides && view({slides});
    }
}

const mapStateToProps = state => ({
    slides: state.slides.data,
    isLoading: state.slides.isLoading
});

const mapDispatchToProps = {loadSlides};

export default connect(mapStateToProps, mapDispatchToProps)(LoadSlidesController);

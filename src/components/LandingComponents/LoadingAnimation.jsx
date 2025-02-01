import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json'; 
import LoadingStyle from '../styles/LoadingAnim.module.css';

const LoadingAnimation = () => {
    return (
        <div className={LoadingStyle.animation}>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    );
};

export default LoadingAnimation;
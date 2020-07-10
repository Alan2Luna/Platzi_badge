import React from 'react';
import Loader from './Loader';
import './styles/PagesLoading.css';

function PageLoading() {
    return(
        <div className="PageLoading">
            <Loader />
        </div>
    )
}

export default PageLoading;
import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={css.container}>
            <div className={css.item}>
                <Circles 
                height="100"
                width="100"
                color="#b73c58"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>
        </div>
        
    )
}

export default Spinner;
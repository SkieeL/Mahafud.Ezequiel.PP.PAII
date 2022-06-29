import React from 'react';
import '../stylesheets/Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Spinner;
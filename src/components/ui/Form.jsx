import React from 'react';
import "../../styles/Form.css"

const Form = () => {
    return (
        <div className='continue-form'>
            <input type="text" placeholder='Enter Your Name' className='continue-input' />
            <select className='continue-input'>
                <option>Select User Type</option>
                <option>Buyer</option>
                <option>Seller</option>
            </select>
            <input type="text" placeholder='Enter Your Location' className='continue-input' />
            <button type="submit" className='continue-btn'>Continue</button>
        </div>
    );
};

export default Form;
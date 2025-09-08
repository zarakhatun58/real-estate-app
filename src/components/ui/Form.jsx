import React, { useState } from 'react';
import "../../styles/Form.css"

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        userType: "",
        location: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("✅ Form Submitted:", formData);
        alert(`Thank you ${formData.name}! You registered as a ${formData.userType} from ${formData.location}.`);
        setFormData({
            name: "",
            userType: "",
            location: ""
        });
    };

    return (
        <form className="continue-form" onSubmit={handleSubmit}>
            <input type="text"
                name="name"
                placeholder="Enter Your Name"
                className="continue-input"
                value={formData.name}
                onChange={handleChange}
                required />
            <select
                name="userType"
                className="continue-input"
                value={formData.userType}
                onChange={handleChange}
                required
            >
                <option value="">Select User Type</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>
            <input
                type="text"
                name="location"
                placeholder="Enter Your Location"
                className="continue-input"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <button type="submit" className='continue-btn'>Continue</button>
        </form>
    );
};

export default Form;
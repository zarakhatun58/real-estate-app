import React from 'react';
import "../../styles/FeaturePropertyHeader.css"

const PropertyHeader = ({ title, desc, buttonText, onButtonClick }) => {
    return (
        <div className='property-header'>
            <div className='text-contain'>
                <p className='feature-text'>{title}</p>
                <p className='desc'>{desc}</p>
            </div>
            {buttonText && (
                <div className="btn-div">
                    <button
                        type="button"
                        className="property-header-btn"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </button>
                </div>
            )}
        </div>
    );
};

export default PropertyHeader;
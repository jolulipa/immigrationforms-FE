import React from "react";
import './style.css';

const ServiceBox = ({formName, description, onClick}) => <div className='container-box'>
    <div className='title' onClick={onClick}>{formName}</div>
    <div className='description-text'>{description}</div>
</div>

export default ServiceBox;

import React, {useState} from 'react';
import './toggleSwitch.css';

export default function ToggleSwitch({label = 'Switch'}) {
    const [isOff, setIsOff] = useState('off');

    const handleClick = () => {
        // console.log('clicked')
        setIsOff(prev => !prev);
    }

    return (
        <div className="toggle-switch-wrapper">
        <label>{label}</label>
        <div className={`toggle-switch ${isOff ? 'off' : 'on'}`}
        onClick={handleClick}
        >
            {isOff ? 'OFF' : 'ON'}
        </div>
        </div>
    );
}
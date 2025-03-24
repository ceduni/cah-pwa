import { useState } from 'react';

// Checkbox functional component
const Checkbox = ({ id, label, checked: initialChecked = false, onChange, className, ...props }) => {
    const [checked, setChecked] = useState(initialChecked);

    // Handle the checkbox change
    const handleChange = (event) => {
        setChecked(event.target.checked);

        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div className='custom-checkbox'>
            <label htmlFor={id} className={`custom-checkbox__input ${checked && 'checked'} ${className || ''}`} >
                <input type="checkbox" id={id} checked={checked} style={{display: 'none' }} 
                       aria-checked={checked ? 'true' : 'false'} onChange={handleChange} {...props} />

                <i className="custom-checkbox__checkmark">✓</i>
            </label>
            {label && <span className="custom-checkbox__label">{label}</span>}
        </div>
    );
};

export default Checkbox;

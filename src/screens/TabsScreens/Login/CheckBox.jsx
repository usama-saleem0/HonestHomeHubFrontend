import React, { useState } from 'react';
import '../../auth/auth.css'

const CheckboxList = ({set_selected_queries}) => {
    const initialCheckboxes = [
        { label: 'Heating, Ventilation & Air Conditioning', value: 'Heating, Ventilation, Air Conditioning' },
        { label: 'Water Heater', value: 'Water Heater' },
        { label: 'Roofing', value: 'Roofing' },
        { label: 'Plumbing', value: 'Plumbing' },
        { label: 'Remodeling', value: 'Remodeling' },
        

        { label: 'Landscaping', value: 'Landscaping' },
        { label: 'Cleaning', value: 'Cleaning' },


        { label: 'Fencing', value: 'Fencing' },
        { label: 'Handyman', value: 'Handyman' },

    ];




    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
    const [selectedValues, setSelectedValues] = useState([]);

    const handleCheckboxChange = (value) => {
        console.log(value); 
        const isSelected = selectedValues.includes(value);
        let updatedValues;

        if (isSelected) {
            updatedValues = selectedValues.filter((selectedValue) => selectedValue !== value);
        } else {
            updatedValues = [...selectedValues, value];
        }

        setSelectedValues(updatedValues);
        set_selected_queries(updatedValues)
    };

    // console.log("selectedValues", selectedValues)    

    return (
        <div className='form-chek-box'>
            <h2>Select Your Service You Wanna Provide</h2>
            <div className='cheak-boxs'>
                {checkboxes.map((checkbox) => (
                    <div key={checkbox.value} className='cheak-boxs-box'>
                        <label className='containerz'>
                            <input
                                type='checkbox'
                                checked={selectedValues.includes(checkbox.value)}
                                onChange={() => handleCheckboxChange(checkbox.value)}
                            />
                            <span className='checkmark'></span>
                        </label>
                        <p>{checkbox.label}</p>
                    </div>
                ))}
            </div>
            {/* <div>
                <p>Selected Values: {JSON.stringify(selectedValues)}</p>
            </div> */}
        </div>
    );
};

export default CheckboxList;

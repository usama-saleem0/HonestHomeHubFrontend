// import React, { useState } from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import { user_color } from '../../utils/color';

// const PriceSlider = () => {
//   const [priceRange, setPriceRange] = useState([0, 3000]);

//   const handleSliderChange = (value) => {
//     setPriceRange(value);
//   };

//   const sliderStyle = {
//     // margin: '20px 0',
//   };

//   const railStyle = {
//     backgroundColor: '#a3cca3', // Green color for the slider rail
//     height: 5,
//   };

//   const trackStyle = {
//     backgroundColor: user_color, // Green color for the selected track
//     height: 5,
//   };

//   const handleStyle = {
//     borderColor: user_color, // Green color for the handle
//   };

//   return (
//     <div style={{ width: '100%', margin: 'auto' }}>
//       <div style={{  }}>
//         <label style={{ color: '#4caf50' }}>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
//       </div>
//       <Slider
//         range
//         min={0}
//         max={3000}
//         defaultValue={priceRange}
//         onChange={handleSliderChange}
//         style={sliderStyle}
//         railStyle={railStyle}
//         trackStyle={trackStyle}
//         handleStyle={[handleStyle, handleStyle]}
//       />
//     </div>
//   );
// };

// export default PriceSlider;

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSlider = ({ setSelectedPriceValue }) => {
    const [selectedPrice, setSelectedPrice] = useState(0);

    const handleSliderChange = (value) => {
        setSelectedPrice(value);
        setSelectedPriceValue(value)
        localStorage.setItem('Select_Price', value);

    };

    const sliderStyle = {
        margin: '20px 0',
    };

    const railStyle = {
        backgroundColor: '#a3cca3', // Green color for the slider rail
        height: 5,
    };

    const trackStyle = {
        backgroundColor: '#4caf50', // Green color for the selected track
        height: 5,
    };

    const handleStyle = {
        borderColor: '#4caf50', // Green color for the handle
    };

    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ color: '#4caf50' }}>Selected Price: ${selectedPrice}</label>
            </div>
            <Slider
                min={0}
                max={3000}
                value={selectedPrice}
                onChange={handleSliderChange}
                style={sliderStyle}
                railStyle={railStyle}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
            />
        </div>
    );
};

export default PriceSlider;


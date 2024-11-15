import React, { useState } from 'react';


const VendorPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open the popup */}
     

      {/* Popup container */}
     
        <div className="popup">
          {/* Close button */}
          <span className="close" onClick={closePopup}>&times;</span>

          {/* Popup content */}
          <h1></h1>
          <h2>Vendor</h2>

          <div>
            <h1>Vendor Profile</h1>
            <p></p>
          </div>
        </div>
    
    </div>
  );
};

export default VendorPopup;

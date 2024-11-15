// import React, { useState } from 'react';

// const ImageSlider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="slider">
//       <button onClick={prevImage}>Previous</button>
//       <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} style={{width:'250px', height:'250px'}} />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// export default ImageSlider;



import React, { useState } from 'react';
import next from '../../../src/assets/new/icons8-next-page-24.png'
import back from '../../../src/assets/new/icons8-back-to-24.png'
const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="slider unique-class-47" style={{position:'relative'}}>
    {/* <button onClick={prevImage} className='previous-button'>Previous</button> */}
    <img src={back} onClick={prevImage}  className='previous-button unique-class-48'/>
    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='image_slider unique-class-49' />
    {/* <button onClick={nextImage} className='next-button'>Next</button> */}
    <img src={next} onClick={nextImage}  className='next-button unique-class-50 admindylansliderbtn'/>
  </div>
  
  );
};
export default ImageSlider;

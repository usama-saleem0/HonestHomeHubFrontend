import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import axios from 'axios';
import { baseURL } from "../../config/apiHandle/apiHandle";
import { toast } from "react-toastify";

const squareSize = "150px";
const squareSizes = "150px";


// const displayInputSelectedImage = (imageFile) => {
//   return URL.createObjectURL(imageFile);
// };
const displayInputSelectedImage = (imageFile) => {
    // Check if it's a File object
    if (imageFile instanceof File) {
        return URL.createObjectURL(imageFile);
    }
    // If it's already a URL, just return it
    return imageFile;
};

export const License_Upload = ({ selectedImagesHandle }) => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isImagePickerVisible, setIsImagePickerVisible] = useState(true);
    const [totalValue, setTotalValue] = useState(0);

    const handleImageSelect = async (e) => {
        const { files } = e.target;

        if (selectedImages.length + files.length > 2) {
            toast.error("You can only upload a maximum of 2 pictures.");
            return;
        }
    

        // Map over the files and handle each image individually
        const newImages = await Promise.all(
            Array.from(files).map(async (file) => {
                try {
                    const formData = new FormData();
                    formData.append("files", file);

                    const response = await axios.post(`${baseURL}/upload-files`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });

                    console.log("Response from the backend:", response.data);
                    return response?.data?.url;
                } catch (error) {
                    console.error("Error:", error);
                    return null;
                }
            })
        );

        setSelectedImages((prevImages) => [...prevImages, ...newImages.filter(Boolean)]);

        // Calculate the total value based on the number of images selected
        const newValue = totalValue + newImages.length * 20;
        setTotalValue(newValue);

        // Check if the total number of selected images is 5
        if (selectedImages.length + newImages.length >= 5) {
            setIsImagePickerVisible(false);
        }

        selectedImagesHandle({ images: [...selectedImages, ...newImages.filter(Boolean)], totalValue: newValue });
    };


    const removeImage = (index) => {
        setSelectedImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    return (

        
//         <Stack sx={{ mt: "1px", mb: "20px" }} className="cent  gogohhh" >

// <Stack  className="classname-888">
//                 <Stack flexDirection={"col"} alignItems={"center"}  className="classname-7800">
//                     {isImagePickerVisible &&
//                         <Stack  className="classname-hsgd0"
//                             justifyContent="center"
//                             alignItems="center"
//                             sx={{
//                                 width: squareSize,
//                                 height: squareSizes,
//                                 backgroundColor: "transparent",
//                                 marginRight: "15px",
//                                 marginTop: "15px",
//                                 border: "2px dashed #01BAF2",
//                             }}
//                         >
//                             <Button
//                                 variant="text"
//                                 component="label"
//                                 sx={{ width: "100%", height: "100%", color: "gray" }}
//                             >
//                                 <Stack  className="classname-999">
//                                     <IoAddSharp size={50} color="#989898" />
//                                 </Stack >
//                                 <input
//                                     onChange={handleImageSelect}
//                                     type="file"
//                                     name="community_image_url"
//                                     multiple
//                                     hidden
//                                 />
//                             </Button>
//                         </Stack>}
//                 </Stack>
//                 </Stack>
//                 {/* <Stack sx={{ color: "black", fontSize: { md: 20, lg: 20, sm: 15, xs: 8 } , fontWeight:"bold", textAlign:'center'}} mt={3}>Upload an Image's</Stack> */}
//             <Stack  className=" license"
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="center"
//                 flexWrap="wrap"
//             >
//                 {selectedImages.map((image, index) => (
//                     <Stack  className=" license1"
//                         key={index}
//                         justifyContent="center"
//                         alignItems="center"
//                         sx={{
//                             width: "129px",
//                             height: "128px",
//                             backgroundImage: `url(${displayInputSelectedImage(image)})`,
//                             backgroundPosition: "center",
//                             backgroundRepeat: "no-repeat",
//                             backgroundSize: "cover",
//                             marginRight: "15px",
//                             marginTop: "15px",
//                             borderRadius: "10%",
//                         }}
//                     >
//                         {/* <Button
//                             variant="text"
//                             onClick={() => removeImage(index)}
//                             sx={{ position: 'absolute', top: 0, right: 0 }}
//                         >
//                             Remove
//                         </Button> */}
//                     </Stack>
//                 ))}
                
//             </Stack>
//         </Stack>


<Stack sx={{ mt: "1px", mb: "20px" }} className="cent gogohhh">
<Stack className="classname-888">
    <Stack flexDirection={"col"} alignItems={"center"} className="classname-7800">
        {isImagePickerVisible &&
            <Stack className="classname-hsgd0"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: squareSize,
                    height: squareSizes,
                    backgroundColor: "transparent",
                    marginRight: "15px",
                    marginTop: "15px",
                    border: "2px dashed #01BAF2",
                }}
            >
                <Button
                    variant="text"
                    component="label"
                    sx={{ width: "100%", height: "100%", color: "gray" }}
                >
                    <Stack className="classname-999">
                        <IoAddSharp size={50} color="#989898" />
                    </Stack >
                    <input
                        onChange={handleImageSelect}
                        type="file"
                        name="community_image_url"
                        multiple
                        hidden
                    />
                </Button>
            </Stack>}
    </Stack>
</Stack>
{selectedImages.length > 0 && (
    <Stack className="license"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
    >
        {selectedImages.map((image, index) => (
            <Stack className="license1"
                key={index}
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "129px",
                    height: "128px",
                    backgroundImage: `url(${displayInputSelectedImage(image)})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    marginRight: "15px",
                    marginTop: "15px",
                    borderRadius: "10%",
                }}
            >
                {/* <Button
                    variant="text"
                    onClick={() => removeImage(index)}
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                >
                    Remove
                </Button> */}
            </Stack>
        ))}
    </Stack>
)}
</Stack>




    );
};

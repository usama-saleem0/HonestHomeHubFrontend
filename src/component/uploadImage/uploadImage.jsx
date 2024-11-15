import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { IoAddSharp } from "react-icons/io5";
const squareSize = "60px";
const displayInputSelectedImage = (imageFile) => {
  return URL.createObjectURL(imageFile);
};
export const Upload_image_component = (props) => {
  const { selectedImageHandle, selectedImage } = props;
  // console.log(!selectedImage);
  return (
    <Stack sx={{ mt: "1px", mb: "20px" }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
      >
        {!selectedImage ? (
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: { lg: "110px", md: "110px", sm: "90px", xs: "90px" },
                height: { lg: "110px", md: "110px", sm: "90px", xs: "90px" },
                backgroundColor: "transparent",
                marginRight: "15px",
                marginTop: "15px",
                border: "2px dashed #0874B7",
                // borderRadius: "10px",
              }}
            >
              <Button
                variant="text"
                component="label"
                sx={{ width: "100%", height: "100%", color: "gray" }}
              >
                <Stack>
                  <IoAddSharp size={50} color="#0874B7" />
                </Stack>
                <input
                  onChange={(e) => selectedImageHandle(e)}
                  type="file"
                  name="community_image_url"
                  hidden
                />
              </Button>
            </Stack>
            {/* <Stack fontSize={13} color={"#646464"} mt={0.6}>
              Upload Photo
            </Stack> */}
          </Stack>
        ) : (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              width: { lg: "100px", md: "100px", sm: "100px", xs: "100px" },
              height: { lg: "100px", md: "100px", sm: "100px", xs: "100px" },
              backgroundImage: `url(${selectedImage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginRight: "15px",
              marginTop: "15px",
              borderRadius: "10px",
            }}
          ></Stack>
        )}
      </Stack>
      {selectedImage && (
        <Stack
          sx={{ width: { lg: "60px", md: "60px", sm: "50px", xs: "40px" } }}
          mt={1}
        >
          <Button variant="text" component="label">
            <input
              onChange={(e) => selectedImageHandle(e)}
              type="file"
              hidden
            />
            <Typography align="center" fontSize={9} textTransform="none">
              Change Photo
            </Typography>
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

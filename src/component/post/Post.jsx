import React, { useState } from "react";
import "./Post.css"; // Post component ke liye CSS file
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { BiMessageRounded } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoMdShareAlt } from "react-icons/io";
import { main_color } from "../../utils/color";
import CommentInput from "../input/CommentInput ";
import useTheme from "../../hooks/theme";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { vote_post_async } from "../../services/newsFeedService";

const Post = ({ sideicon, data }) => {
  const theme = useTheme();
  const {
    first_name,
    last_name,
    profile_pic,
    score,
    text_html_code_block,
    updatedAt,
    vote,
    image_url,
    comments_count,
    _id,
  } = data;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const dispatch = useDispatch();
  return (
    <div
      className="post-container"
      style={{ backgroundColor: theme.card_bg_color }}
    >
      <Stack flexDirection={"row"} justifyContent={"space-between"} p={2}>
        <Stack flexDirection={"row"}>
          <Avatar
            alt="Remy Sharp"
            src={
              profile_pic
                ? profile_pic
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
            }
            sx={{ width: 56, height: 56 }}
          />
          <Stack alignItems={"start"} ml={2}>
            <Typography
              textAlign={"start"}
              sx={{
                color: theme.text_color,
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              {first_name + " " + last_name}
            </Typography>
            <Typography
              textAlign={"start"}
              sx={{
                color: "#767676",
                fontSize: 13,
                mt: -0.6,
              }}
            >
              {updatedAt}
            </Typography>
          </Stack>
        </Stack>
        <Stack>{sideicon}</Stack>
      </Stack>

      <Stack p={2}>
        {/* <Typography
          textAlign={"start"}
          sx={{
            color: theme.text_color,
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          What are the most interesting facts about human behavior?
        </Typography>
        <Typography
          textAlign={"start"}
          sx={{
            color: theme.text_color,
            fontSize: 13,
          }}
        >
          1. 70% of people like old songs because of the memories attached to
          them. 2. When a person dies, they have 7 minutes of brain activity
          left, it's the mind playing back the person's memories in a dream
          sequence. See more
        </Typography> */}
        <ReactQuill
          value={text_html_code_block}
          readOnly={true} // Make the editor read-only to render HTML content
          theme="snow" // or another theme/style
          modules={{
            toolbar: false, // Disable the toolbar for read-only mode
          }}
          formats={[]} // Disable formats for read-only mode
          dangerouslySetInnerHTML={{ __html: text_html_code_block }} // Render HTML content
        />
      </Stack>
      {image_url ? (
        <img
          className="post-image"
          src={
            image_url
              ? image_url
              : "https://c4.wallpaperflare.com/wallpaper/961/953/301/full-hd-nature-for-pc-1920x1200-wallpaper-thumb.jpg"
          }
          alt="Post"
        />
      ) : null}
      <Stack p={2}>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            sx={{ gap: { md: 3, lg: 3, sm: 1, xs: 1 } }}
          >
            <Stack
              onClick={() => {
                if (vote === "upvote") {
                  dispatch(vote_post_async({ post_id: _id, vote: "" }));
                } else {
                  dispatch(vote_post_async({ post_id: _id, vote: "upvote" }));
                }
              }}
            >
              <Box
                sx={
                  vote === "upvote"
                    ? {
                        border: "1px solid white",
                        color: "white",
                        backgroundColor: "#fe9316",
                      }
                    : { border: "1px solid #fe9316", color: "#fe9316" }
                }
                className="upvote-button"
              >
                <Box className="icon">
                  <ImArrowUp size={25} />
                </Box>
                <Box className="text">Upvote</Box>
                <Box
                  sx={{ backgroundColor: "#fe9316", color: "white" }}
                  className="count"
                >
                  {score}
                </Box>
              </Box>
            </Stack>
            <Stack
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                cursor: "pointer",
                border: `1px solid ${
                  isHovered || vote === "downvote" ? "white" : "#fe9316"
                }`,
                padding: 0.7,
                borderRadius: 1,
                backgroundColor:
                  vote === "downvote" || isHovered ? "#fe9316" : "white",
              }}
              onClick={() => {
                if (vote === "downvote") {
                  dispatch(vote_post_async({ post_id: _id, vote: "" }));
                } else {
                  dispatch(vote_post_async({ post_id: _id, vote: "downvote" }));
                }
              }}
            >
              <ImArrowDown
                color={
                  isHovered || vote === "downvote" ? "white" : theme.icon_color
                }
                size={25}
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                color={theme.dark_icon_text_color}
                fontWeight={"bold"}
                fontSize={14}
              >
                {comments_count}
              </Typography>
              <BiMessageRounded color={theme.dark_icon_text_color} size={31} />
            </Stack>
            <Stack sx={{ cursor: "pointer" }}>
              <IoMdShareAlt color={theme.dark_icon_text_color} size={31} />
            </Stack>
          </Stack>
          <Stack sx={{ cursor: "pointer" }}>
            <BsThreeDotsVertical color={theme.dark_icon_text_color} size={31} />
          </Stack>
        </Stack>
      </Stack>
      <Stack p={2} flexDirection={"row"} alignItems={"center"} gap={1}>
        <Stack>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
        <Stack flexGrow={1}>
          <CommentInput />
        </Stack>
      </Stack>
    </div>
  );
};

export default Post;

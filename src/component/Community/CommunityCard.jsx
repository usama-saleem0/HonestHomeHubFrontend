import { Divider, Stack } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/theme";
import { useDispatch, useSelector } from "react-redux";
import { join_community_async } from "../../services/communityService";
import Btn from "../button/Button";
import { asyncStatus } from "../../utils/async_status";
import { useState } from "react";

const CommunityCard = ({
  title,
  description,
  image_url,
  followers,
  id,
  joined,
}) => {
  const theme = useTheme();
  const { join_community_status, join_community_error, join_community_data } =
    useSelector((state) => state.community);
  const [loadingId, setLoadingId] = useState("");
  const dispatch = useDispatch();
  return (
    <Stack mt={2} className="unique-class-186">
  <Divider sx={{ border: 0.4, borderColor: "#9F9F9F", opacity: 0.3 }} className="unique-class-187" />
  <Stack
    flexDirection={"row"}
    alignItems={"center"}
    mt={1}
    sx={{
      justifyContent: {
        md: "space-between",
        lg: "space-between",
        sm: "space-between",
        xs: "space-between",
      },
    }}
    className="unique-class-188"
  >
    <Stack flexDirection={"row"} alignItems={"center"} gap={2} className="unique-class-189">
      <Stack className="unique-class-190">
        <img src={image_url} width={53} height={53} className="unique-class-191" />
      </Stack>
      <Stack flexDirection={"column"} className="unique-class-192">
        <span
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: theme.text_color,
          }}
          className="unique-class-193"
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 10,
            color: theme.text_color,
          }}
          className="unique-class-194"
        >
          {description}
        </span>
        <span
          style={{
            fontSize: 10,
            color: "#717171",
          }}
          className="unique-class-195"
        >
          {followers} followers
        </span>
      </Stack>
    </Stack>
    <Btn
      label={joined ? "Joined" : "Join"}
      onClick={() => {
        setLoadingId(id);
        dispatch(join_community_async({ community_id: id }));
      }}
      loading={join_community_status === asyncStatus.LOADING && id === loadingId}
      disabled={joined}
      sx={{
        fontSize: 10,
        backgroundColor: "#FE9316",
        ":hover": {
          backgroundColor: "#c66a00",
        },
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 30px",
      }}
      className="unique-class-196"
    />
  </Stack>
</Stack>

  );
};

export default CommunityCard;

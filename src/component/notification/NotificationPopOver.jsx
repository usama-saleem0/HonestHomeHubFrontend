import * as React from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BsFillBellFill } from "react-icons/bs";
import useTheme from "../../hooks/theme";
import { Container, Stack } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import person from "../../assets/personpng.png";

export default function NotificationPopOver() {
  const theme = useTheme();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <BsFillBellFill
            style={{ cursor: "pointer" }}
            {...bindTrigger(popupState)}
            color={theme.text_color}
            size={30}
          />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Container sx={{ p: 2, width: 400, height: 600 }}>
              <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Stack
                  sx={{
                    color: "#000000",
                    fontSize: 17,
                    fontWeight: 700,
                  }}
                >
                  Notifications
                </Stack>
                <Stack>
                  <RxCross1 color={theme.text_color} />
                </Stack>
              </Stack>
              {new Array(5).fill(" ").map((e) => (
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  mt={1}
                  sx={{
                    justifyContent: {
                      md: "space-between",
                      lg: "space-between",
                      sm: "space-between",
                      xs: "space-around",
                    },
                  }}
                >
                  <Stack>
                    <img src={person} width={53} height={53} />
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black",
                      }}
                    >
                      Albert Flores
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        color: "black",
                      }}
                    >
                      following you
                    </span>
                  </Stack>
                  <Stack
                    sx={{
                      backgroundColor: "#FE9316",
                      color: "white",
                      p: 1,
                      borderRadius: 3,
                      fontSize: 13,
                    }}
                  >
                    Follow
                  </Stack>
                </Stack>
              ))}
            </Container>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

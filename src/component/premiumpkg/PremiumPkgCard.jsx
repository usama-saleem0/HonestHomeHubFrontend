import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import CommunityButton fro../button/GigBtnBtn";
import useTheme from "../../hooks/theme";
import { Avatar, Grid, Stack } from "@mui/material";
import { BiDollar, BiSolidCrown } from "react-icons/bi";
import speaker from "../../assets/speaker.png";
import Btn from "../button/Button";
import CustomInput from "../input/IconInput";
import { AiFillCreditCard } from "react-icons/ai";
import "./premium.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function PremiumPkgCard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <CommunityButton
        onClick={handleOpen}
        borderColor={theme.text_color}
        color={theme.text_color}
        sx={{
          borderColor: "black",
          textTransform: "capitalize",
          fontWeight: 500,
        }}
        startIcon={
          <BiSolidCrown style={{ marginTop: 1.2 }} size={18} color="#FE9316" />
        }
        title={"Try Premium"}
      /> */}
      <Modal
        disableScrollLock
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "30%", lg: "30%", sm: "50%", xs: "80%" },
            height: { md: "80%", lg: "80%", sm: "80%", xs: "70%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
          }}
          className="scroll_content"
        >
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Stack
              sx={{
                color: "#FE9316",
                fontSize: 30,
                fontWeight: 1000,
              }}
            >
              AppQuaintance
            </Stack>
            <Stack mt={0.5}>
              <BiSolidCrown size={30} color="#FE9316" />
            </Stack>
          </Stack>
          <Stack mt={2} flexDirection={"column"} alignItems={"center"}>
            <Stack>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
                sx={{ width: 100, height: 100 }}
              />
            </Stack>
            <Stack sx={{ fontSize: 18, color: "#646464" }}>
              Join AppQuaintance +
            </Stack>
          </Stack>
          <Stack>
            <Grid container spacing={2} mt={2}>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Stack
                  sx={{
                    backgroundColor: "#FCEFDC",
                    borderRadius: 3,
                    p: 2,
                    height: 90,
                  }}
                >
                  <Stack
                    sx={{
                      backgroundColor: "#FE9316",
                      width: 32,
                      height: 32,
                      borderRadius: 50,
                      p: 0.5,
                    }}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <img src={speaker} width={25} height={25} />
                  </Stack>
                  <Stack sx={{ fontSize: 15, color: "black" }}>
                    Browse AppQuaintace Ad -free
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Stack
                  sx={{
                    backgroundColor: "#FCEFDC",
                    borderRadius: 3,
                    p: 2,
                    height: 90,
                  }}
                >
                  <Stack
                    sx={{
                      backgroundColor: "#FE9316",
                      width: 32,
                      height: 32,
                      borderRadius: 50,

                      p: 0.5,
                    }}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <BiDollar color={"white"} size={30} />
                  </Stack>
                  <Stack sx={{ fontSize: 15, color: "black" }}>
                    Try it free for 30 days
                  </Stack>
                </Stack>
              </Grid>
              {/* ---------------------- */}
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Stack
                  sx={{ backgroundColor: "#DFF0FF", borderRadius: 2, p: 1 }}
                >
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack gap={1} flexDirection={"row"} alignItems={"center"}>
                      <Stack
                        sx={{
                          border: 8,
                          borderColor: "#FE9316",
                          width: 15,
                          height: 15,
                          borderRadius: 50,
                        }}
                      ></Stack>
                      <Stack sx={{ color: "#FE9316", fontSize: 12 }}>
                        Yearly
                      </Stack>
                      <Stack
                        sx={{
                          backgroundColor: "#ECC892",
                          fontSize: 8,
                          p: 0.4,
                          color: "#FE9316",
                          borderRadius: "3.46px",
                        }}
                      >
                        Save 20%
                      </Stack>
                    </Stack>
                    <Stack sx={{ color: "#FE9316", fontSize: 12 }}>
                      $3.99/mo
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Stack
                  sx={{ backgroundColor: "#DFF0FF", borderRadius: 2, p: 1 }}
                >
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack gap={1} flexDirection={"row"} alignItems={"center"}>
                      <Stack
                        sx={{
                          border: 8,
                          borderColor: "#FE9316",
                          width: 15,
                          height: 15,
                          borderRadius: 50,
                        }}
                      ></Stack>
                      <Stack sx={{ color: "#FE9316", fontSize: 12 }}>
                        Monthly
                      </Stack>
                    </Stack>
                    <Stack sx={{ color: "#FE9316", fontSize: 12 }}>
                      $3.99/mo
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            {/* ---------------------- */}
            <Stack
              mt={2}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack sx={{ fontSize: 15, color: "black" }}>
                30-day free trial
              </Stack>
              <Stack sx={{ fontSize: 15, color: "black" }}>$0.00</Stack>
            </Stack>
            <Stack
              mt={1}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack sx={{ fontSize: 15, color: "black" }}>
                Starting November 19, 2023
              </Stack>
              <Stack sx={{ fontSize: 15, color: "black" }}>$47.88/yr</Stack>
            </Stack>
            <Stack sx={{ fontSize: 13, color: "#777777", mt: 1 }}>
              Your subscription will renew automatically each year. Cancel at
              any time in settings. By signing up for a subscription, you agree
              to AppQuaintance's Subscriber Terms of Service.
            </Stack>

            <Stack mt={1}>
              <Btn
                sx={{
                  backgroundColor: "#FFC674",
                  color: "#FE9316",
                  fontWeight: "bold",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#FFC674",
                    color: "#FE9316",
                  },
                }}
                label="Payment"
              />
            </Stack>

            <Stack mt={1}>
              <CustomInput
                Icon={<AiFillCreditCard size={25} color="gray" />}
                label="Card Number"
                placeholder="6032 4578 5432 9870"
              />
              <Stack sx={{ color: "#777777", fontSize: 13, mt: 1 }}>
                Existing subscriptions will also be charged to this card. You
                may receive a temporary authorization charge to validate your
                card.
              </Stack>
            </Stack>
            <Stack mt={1}>
              <Btn
                sx={{
                  backgroundColor: "#FE9316",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#FE9316",
                    color: "white",
                  },
                }}
                label="Try for 30 days"
              />
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

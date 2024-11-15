import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";
import "./index.css";
import CustomInput from "../input/IconInput";
// import Link from '@mui/material'
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import ContactUsFooter from "./Footer-Popup/Contactusfooter";

const Footer = () => {
  const navigate = useNavigate();
  const howitworkcustomer = () => navigate("/howitworksh");
  return (
    <Stack>
      <Container className="footer-main main-container honest-150">
        <Grid container p={5} className="honest-151">
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack
              style={{ flexDirection: "column", alignItems: "center" }}
              className="honest-152"
            >
              <Stack className="footer_heading honest-153">
                For Professionals
              </Stack>
              <Stack style={{ flexDirection: "column", alignItems: "center" }}>
                <Stack className="footer-link honest-154">How it Work</Stack>
                {/* <Stack className='footer-link honest-155'>Pricing</Stack> */}
                <Stack className="footer-link honest-156">
                  Join as a Professional
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack
              style={{ flexDirection: "column", alignItems: "center" }}
              className="honest-157"
            >
              <Stack className="footer_heading honest-158">For Customer</Stack>
              <Stack style={{ flexDirection: "column", alignItems: "center" }}>
                <Stack
                  onClick={howitworkcustomer}
                  className="footer-link honest-159"
                >
                  How it Works
                </Stack>
                <Stack className="footer-link honest-160">
                  <Link
                    href="/mainsection"
                    className="honest-161"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Stack>
                <Stack className="footer-link honest-162">
                  <ContactUsFooter />
                </Stack>

                {/* <Stack className='footer-link honest-162'>

          <button> Contact Support</button>

                  </Stack> */}
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack
              style={{ flexDirection: "column", alignItems: "center" }}
              className="honest-163"
            >
              <Stack className="footer_heading honest-164">
                Terms & Conditions
              </Stack>
              <Stack style={{ flexDirection: "column", alignItems: "center" }}>
                <Stack className="footer-link honest-165">
                  <Link
                    href="/privacypolicy"
                    className="honest-166"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Privacy Policy
                  </Link>
                </Stack>
                <Stack className="footer-link honest-167">
                  <Link
                    href="/customerpolicy"
                    className="honest-168"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Customer's Guide
                  </Link>
                </Stack>
                <Stack className="footer-link honest-169">
                  <Link
                    href="/vendorpolicy"
                    className="honest-170"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Vendor's Guide
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack
              style={{ flexDirection: "column", alignItems: "center" }}
              className="honest-171"
            >
              <Stack className="footer_heading honest-172">Subscribe</Stack>
              <Stack className="honest-173">
                <CustomInput />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <hr style={{ border: "1px solid white" }} className="honest-174" />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;

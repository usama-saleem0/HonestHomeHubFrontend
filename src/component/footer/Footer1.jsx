import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";
import "./index.css";
import CustomInput from "../input/IconInput";
// import Link from '@mui/material'
import Link from "@mui/material/Link";

const Footer1 = () => {
  return (
    <Stack>
      <Container className="footer-main main-container">
        <Grid container p={5}>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack style={{ flexDirection: "column", alignItems: "center" }}>
              <Stack className="footer_heading">For Professionals</Stack>
              <Stack style={{ flexDirection: "column", alignItems: "center" }}>
                <Stack className="footer-link">How it Work</Stack>
                {/* <Stack className='footer-link'>Pricing</Stack> */}
                <Stack className="footer-link">Join as a Professional</Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack style={{ flexDirection: "column", alignItems: "center" }}>
              <Stack className="footer_heading">For Customer</Stack>
              <Stack style={{ flexDirection: "column", alignItems: "center" }}>
                {/* <Stack className='footer-link'>Find a Professional to Get Started</Stack> */}
                <Stack className="footer-link">How it Works</Stack>

                {/* <Stack className='footer-link'>Login</Stack> */}

                <Stack className="footer-link">
                  <Link
                    href="/mainsection"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Stack>
                <Stack className="footer-link">Contact Support</Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack style={{ flexDirection: "column", alignItems: "center" }}>
              <Stack className="footer_heading">Terms & Conditions</Stack>
              <Stack style={{ flexDirection: "column", alignItems: "center" }}>
                <Stack className="footer-link">
                  <Link
                    href="/privacypolicy"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Privacy Policy
                  </Link>
                </Stack>

                <Stack className="footer-link">
                  <Link
                    href="/customerpolicy"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Customer's Guide
                  </Link>
                </Stack>

                <Stack className="footer-link">
                  <Link
                    href="/vendorpolicy"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Vendor's Guide
                  </Link>
                </Stack>

                {/* <Stack className='footer-link'>Privacy Policy</Stack> */}

                {/* <a href="/privacypolicy" className="signup-link link-1">Terms & Conditions </a> */}

                {/* <Stack className='footer-link'>
         <Link href="/privacypolicy">Privacy Policy</Link>
              </Stack> */}

                {/* <Link href="/privacypolicy">
                             <Stack className='footer-link'>Privacy Policy</Stack>  
                                 </Link> */}
                {/* <Stack className='footer-link'>Cookies Policy</Stack>
                            <Stack className='footer-link'>Consent Policy</Stack> */}
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6} xs={12} lg={3}>
            <Stack style={{ flexDirection: "column", alignItems: "center" }}>
              <Stack className="footer_heading">Subscribe</Stack>
              <Stack>
                <CustomInput />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12}>
            <hr style={{ border: "1px solid white" }} />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer1;

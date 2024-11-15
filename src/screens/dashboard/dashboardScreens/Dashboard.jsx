import React from 'react'
import './main.css'
import { Container, Divider, Grid, Stack } from '@mui/material';
import ChatScreen from '../../../component/ChatApp/ChatScreen';
import Recent_Chat from '../../../component/ChatApp/Recent_Chat';
import CustomerProfileCard from '../../../component/CreatePostCard/CustomerProfileCard';
import VendorProfileCard from '../../../component/CreatePostCard/VendorProfileCard';
import { IoMdArrowRoundBack } from "react-icons/io";
import { setFalseIndex } from '../../../store/slice/AuthSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';





const Dashboard_Screen = () => {

    const dispatch = useDispatch()

    const selectedLeadIndex = useSelector((state) => state.authSlice);
    const { selectedIndexValue } = useSelector((state) => state.authSlice)
    const select_index = selectedLeadIndex.selectedLeadIndex


    // my work
    // const [selectedImage, setSelectedImage] = useState("");


    console.log(select_index);
    const GoBackHandle = () => {
        dispatch(setFalseIndex(setFalseIndex));
    }
    return (
        <div
            className="screen_position_container"
        >
            <Container maxWidth='xl'className='Main_Container'>

                <Grid container   style={{paddingRight:'0px'}}>
                    {
                        !select_index ? <Grid item md={12} lg={12} sm={12} xs={12} mt={2}>
                            <Stack>
                                {selectedIndexValue === "Vendor" ? <VendorProfileCard /> : selectedIndexValue === "Customer" ? <CustomerProfileCard /> : null}


                            </Stack>
                        </Grid> : <>
                            <Grid item md={8} lg={8} sm={12} xs={12} mt={3}  >
                                <Stack>
                                    <IoMdArrowRoundBack onClick={GoBackHandle} style={{ cursor: 'pointer' }} color='black' size={25} />
                                </Stack>
                                <Stack >

                                    <ChatScreen />
                                </Stack>
                            </Grid>
                            <Grid item md={4} lg={4} sm={12} xs={12} sx={{ mt: { xl: 6, lg: 6, md: 6, sm: 75, xs: 72 } }} >
                                <Stack mt={{ md: 0, sm: 0, xs: 5, }}>
                                    <Recent_Chat />
                                </Stack>
                            </Grid>
                        </>
                    }



                </Grid>

                
            </Container>
        </div>
    )
}

export default Dashboard_Screen
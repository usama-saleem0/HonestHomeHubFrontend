import React, { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import { main_color, vendor_color } from "../../../utils/color";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../component/input/Input";
import PasswordInput from "../../../component/input/PasswordInput";
import Btn from "../../../component/button/Button";
import { Upload_image_component } from "../../../component/uploadImage/uploadImage";
import { baseURL } from "../../../config/apiHandle/apiHandle";
import useTheme from "../../../hooks/theme";
import TimePicker from "../../../component/DateTimePicker/DateTimePicker";
import Select_Exp from "../../../component/select/Select_Exp";
import { create_vendor_async_service } from "../../../services/vendorService";
import { setVendorIdle } from "../../../store/slice/vendorSlice";
import { asyncStatus } from "../../../utils/async_status";
import Select_query from "../../../component/select/Select_query";
import TimeRangeSelector from "../../../component/DateTimePicker/TimerangePicker copy";
// import { register_user_post_async } from "../../../services/authService";
// import { asyncStatus } from "../../../utils/async_status";
// import { setIdleStatus } from "../../../store/slice/AuthSlice";





const VendorSignUp = () => {
    const { searchTerm } = useParams();
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const theme = useTheme()

    const { vendor_status,
        vendor_data,
        vendor_error } = useSelector((state) => state.vendorAuth)

    const [selectedImage, setSelectedImage] = useState("");
    const [communityData, setCommunityData] = useState({});

    // console.log('communityData', communityData);
    const selectedImageHandle = async (e) => {
        const { id, files } = e.target;
        try {
            const formData = new FormData();
            formData.append("files", files[0]);

            const response = await axios.post(`${baseURL}/upload-files`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // console.log({ response });

            // Handle the response from the backend
            setSelectedImage(response?.data?.url);
            setCommunityData((prev) => ({
                ...prev,
                community_image_url: response?.data?.url,
            }));
            console.log("Response from the backend:", response.data);
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };

    const [data, setData] = useState({
        availablity_times: null
    });
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedQuery, setSelectedQuery] = useState('');

    const options = [
        { value: 'Beginner', label: 'Beginner' },
        { value: 'Expert', label: 'Expert' },
        { value: 'Intermediate', label: 'Intermediate' },
    ];
    const select_Query = [
        { value: 'Select Query', label: 'Select Query' },
        { value: 'Plumber', label: 'Plumber' },
        { value: 'Electrician', label: 'Electrician' },
        { value: 'Carpenter', label: 'Carpenter' },
        { value: 'Painter', label: 'Painter' },
        { value: 'House Cleaner', label: 'House Cleaner' },
        { value: 'Gardener', label: 'Gardener' },
        { value: 'Mechanic', label: 'Mechanic' },
        { value: 'IT Technician', label: 'IT Technician' },
        { value: 'Chef', label: 'Chef' },
        { value: 'Photographer', label: 'Photographer' },
    ];


    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };
    const handleSelectQueryChange = (value) => {
        setSelectedQuery(value);
    };


    const setSelectedTimeValue = (value) => {
        // const timeValue = value.map((range, index) => (
        //     `${range.startTime} to ${range.endTime}`
        // ))
        setData({ ...data, availablity_times: value });
        // console.log("timeValue", value);


    }
    const submitHandle = () => {
        let obj = {
            ...data,
            type: "vendor",
            selected_queries: selectedQuery,
            Profile_Image: selectedImage,
            experience: selectedValue
        }

        dispatch(create_vendor_async_service(obj))
        console.log(obj);;

    }
    useEffect(() => {
        if (vendor_status === asyncStatus.SUCCEEDED) {
            navigation('/dashboard')
            window.location.reload()
            dispatch(setVendorIdle(setVendorIdle))
        }
    }, [, vendor_status])

    return (
        <div>
            <Grid container >
                <Grid item md={2} lg={2} xs={1} sm={1}  >
                    <Stack sx={{ backgroundColor: 'blue' }}></Stack>
                </Grid>
                <Grid item md={10} lg={10} xs={11} sm={11}   >


                    <Stack mt={2}>
                        <Grid container spacing={0.4}>
                            <Grid md={12} lg={12} sm={12} xs={12}>
                                <Upload_image_component
                                    selectedImage={selectedImage}
                                    selectedImageHandle={selectedImageHandle}
                                />
                            </Grid>

                            <Grid item md={6} lg={6} sm={12} xs={12}>
                                <Input
                                    onChange={(e) =>
                                        setData({ ...data, Name: e.target.value })
                                    }
                                    label="Name"
                                />
                            </Grid>
                            <Grid item md={6} lg={6} sm={12} xs={12}>
                                <Input
                                    onChange={(e) =>
                                        setData({ ...data, email: e.target.value })
                                    }
                                    label="Email address"
                                />
                            </Grid>

                            <Grid item md={6} lg={6} sm={12} xs={12}>
                                <Input
                                    type='number'
                                    onChange={(e) =>
                                        setData({ ...data, Phone_Number: e.target.value })
                                    }
                                    label="Phone Number"
                                />
                            </Grid>
                            <Grid item md={6} lg={6} sm={12} xs={12}>
                                <PasswordInput
                                    onChange={(e) =>
                                        setData({ ...data, password: e.target.value })
                                    }
                                    label="Password"
                                />
                            </Grid>
                            <Grid item md={6} lg={6} sm={12} xs={12}>
                                <Select_Exp
                                    label="Experience"
                                    options={options} value={selectedValue} onChange={handleSelectChange} />
                            </Grid>
                            <Grid item md={6} lg={6} sm={12} xs={12}>
                                <Select_query
                                    label="Select Query"
                                    options={select_Query} value={selectedQuery} onChange={handleSelectQueryChange} />
                            </Grid>


                            <Grid item md={12} lg={12} sm={12} xs={12}>
                                <Input
                                    onChange={(e) =>
                                        setData({ ...data, Home_Address: e.target.value })
                                    }
                                    label="Home Address"
                                />
                            </Grid>
                            <Grid item md={12} lg={12} sm={12} xs={12}>
                                {/* <TimePicker setSelectedTimeValue={setSelectedTimeValue} /> */}
                                <TimeRangeSelector setSelectedTimeValue={setSelectedTimeValue} />
                            </Grid>

                            <Grid item md={12} lg={12} sm={12} xs={12} mt={5}>
                                <Btn
                                    onClick={() => submitHandle()}
                                    label={"Sign Up"}
                                    style={{
                                        padding: "10px",
                                        backgroundColor: vendor_color,
                                        borderRadius: "8px",
                                        mt: 6,
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        color: 'white',
                                        cursor: 'pointer'

                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default VendorSignUp;

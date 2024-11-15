import { Stack } from '@mui/material';
import React from 'react'
// import { Stack } from 'react-bootstrap';
import { IoMdArrowBack } from "react-icons/io";
import { main_color } from '../../utils/color';

const View_Details = ({ gobackHandle, getViewDetailsData }) => {
    // console.log("getViewDetailsData", getViewDetailsData);
    return (
        <div className="classname-620">

    <div style={{
        background: "transparent",
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '5px',
        borderRadius: '10px',
        color: main_color

    }} className="classname-621">
        <IoMdArrowBack size={20} cursor={'pointer'} onClick={gobackHandle} className="classname-622" />

        <Stack flexDirection='row' alignItems='center' className="classname-623">

            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-624">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-625">Name:</Stack>
                <Stack> {getViewDetailsData?.customerDetails?.Name}</Stack>
            </Stack>
        </Stack>

        <Stack flexDirection='row' alignItems='center' className="classname-626">

            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-627">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-628">email:</Stack>
                <Stack>  {getViewDetailsData?.customerDetails?.email}</Stack>
            </Stack>
        </Stack>

        <Stack flexDirection='row' alignItems='center' className="classname-629">
            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-630">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-631">email:</Stack>
                <Stack> {getViewDetailsData?.customerDetails?.Home_Address}</Stack>
            </Stack>
        </Stack>

        <Stack flexDirection='row' alignItems='center' className="classname-632">
            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-633">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-634">Job Details:</Stack>
                <Stack> {getViewDetailsData?.customerJobDetails?.details}</Stack>
            </Stack>
        </Stack>

        <Stack flexDirection='row' alignItems='center' className="classname-635">
            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-636">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-637">Budget:</Stack>
                <Stack>{getViewDetailsData?.vendorBudget}$</Stack>
            </Stack>
        </Stack>

        <Stack flexDirection='row' alignItems='center' className="classname-638">
            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-639">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-640">Time:</Stack>
                <Stack>{getViewDetailsData?.time}</Stack>
            </Stack>
        </Stack>

        <Stack flexDirection='row' alignItems='center' className="classname-641">
            <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }} className="classname-642">
                <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-643">Status:</Stack>
                <Stack>{getViewDetailsData?.status}</Stack>
            </Stack>
        </Stack>
        <Stack px={2} mt={1} className="classname-644">
            <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="classname-645">Images:</Stack>
            <Stack flexDirection={'row'} className="classname-646">
                <Stack flexDirection={'row'} alignItems={'center'} sx={{ fontSize: 10, color: '#333333', }} className="classname-647">
                    {getViewDetailsData?.customerJobDetails?.images?.map((e, i) => {
                        return <Stack ml={0.4} flexDirection={'row'} alignItems={'center'} className="classname-648">
                            <img width={60} height={60} src={e} />
                        </Stack>
                    })}
                </Stack>
            </Stack>
        </Stack>
    </div>
</div>

    )
}

export default View_Details
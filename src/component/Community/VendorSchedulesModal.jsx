import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import CommunityButton from "../button/GigBtn";
import useTheme from "../../hooks/theme";
import { Stack } from "@mui/material";
import "./premium.css";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { asyncStatus } from "../../utils/async_status";
import { vendor_color } from "../../utils/color";
import { toast } from "react-toastify";
import { create_schedule_async_service } from "../../services/vendorService";
import { create_payment_async_service } from "../../services/vendorService";
import { socket } from "../../config/apiHandle/apiHandle.js";

import { setCreateSeheduleIdle } from "../../store/slice/vendorSlice";
import { setCreatePayment } from "../../store/slice/vendorSlice";

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TextField from '@mui/material/TextField';
import Charge from "../CreatePostCard/Charge.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,

};

export default function VendorSchedulesModal() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { create_schedule_status,
    create_schedule_data,
    create_schedule_error } = useSelector((state) => state.vendorAuth)

    const { create_payment_status,
      create_payment_data,
      create_payment_error } = useSelector((state) => state.vendorAuth)

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [charge, setcharge] = useState(false);

  const [quotetopen,setquoteopen] = useState(false);

const handlequotetopen =()=> setquoteopen(true);


const handleclosequoteopen = ()=> setquoteopen(false);
const [showInstallments, setShowInstallments] = useState(false);




const handleCharge=()=>{
  setOpen(false)
  setcharge(true)
  setTimeout(() => {
    setcharge(false)
    submitHandle()
  }, 5000);

}


// 
const [numInputs, setNumInputs] = useState('');
  const [inputs, setInputs] = useState([]);

  const handleInputChange1 = (event) => {
    const { value } = event.target;
    setNumInputs(value);
  };

  const handleAddInputs = () => {
    const value = parseInt(numInputs, 10);
    if (!isNaN(value) && value > 0) {
      const newInputs = Array.from({ length: value }, (_, index) => ({
        id: Date.now() + index,
        value: ''
      }));
      setInputs(newInputs);
    }
  };

  const handleDelete = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  const handleInputChangeById = (id, value) => {
    setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
  };



  const submitHandleQuote=()=>{

    console.log(inputs,"quotes")

  }

// 








  const [installmentopen,setinstallmentopen] = useState(false);

const handleinstallmentopen =()=> setinstallmentopen(true);


const handlecloseinstallment = ()=> setinstallmentopen(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  
  const [inputValue, setInputValue] = useState(null);

  const [shedule_description, setshedule_descriptions] = useState(null)
  
  const [data, setData] = useState({
    time: '12:00',
   
    index: null,
   
    shedule_descriptions: '',

  

    

  })

  const [cost,setcost] = useState(0)
  const [inst,setinst]= useState(0)

  const [instAmt,setinstAmt] = useState(0)

  

  const handleTimeChange = (newTime) => {
    console.log(newTime);
    setData({ ...data, time: newTime });
  };

  // const setshedule_description = (e) => {
  //   console.log('ffffffffffffffffffffffffffffffffffffffff', e.target.value);
  //   setData({ ...data, shedule_descriptions: e.target.value });
  // };


  const setshedule_description = (e) => {
    const inputValue = e.target.value;
    setData({ ...data, shedule_descriptions: inputValue });
    // alert(data.shedule_descriptions)
  };

  const handleInputTitle = (e) => {
    console.log(e.target.value)
    setData({ ...data, duration: e.target.value });
  };


  const handleInputTitlejobtime = (e) => {
    console.log(e.target.value)
    setData({ ...data, jobtime: e.target.value });
  };


  // const handleInputLocation = (e) => {
  //   console.log(e.target.value)
  //   setData({ ...data, cost: e.target.value });
  // };

    
  const handleInputLocation = (event) => {
    // Update the state only if the entered value is a number or an empty string
    const input = event.target.value;
    if (/^\d*$/.test(input) || input === '') {
      setData({
        ...data,
        [event.target.name]: input
      });
    }
  };



const handleTimeInput=(e)=>{
  console.log(e.target.value)
  setData({ ...data, JobTime: e.target.value });

}


  const handleInputFromtime = (e) => {
    console.log(e.target.value)
    setData({ ...data, time: e.target.value });
  };

  const handleTimeClick = (time , timeIndex) => {
    console.log('hey',time)
    setSelectedTime(time);
    setSelectedIndex(timeIndex);

    setData({ ...data, time: time});
  };

  const handleDateClick = (date,index) => {
    // console.log('hey',date)

    console.log('hey', date, 'Index:', index)
    
    setSelectedDate(date);
    setSelectedDateIndex(index)
    setData({ ...data, date: date, index: index });
  };

  const handleInputChange = (event) => {
    // Update the state with the new input value
    // setInputValue(event.target.value);
    
    
    // alert(inputValue)

    console.log(inputValue,"INPUT VALUE")

    // Now you can send data to your API if needed
    // Example: sendToApi(event.target.value);
  };

  

  // localStorage

  const storedUserId = localStorage.getItem('userId');
  const user_details = localStorage.getItem('user_details');
  const receivedObject = JSON.parse(user_details);

  const job_id =receivedObject.job_details._id


useEffect (()=>{

console.log(receivedObject,"ZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYMAAAALL")

console.log(receivedObject.job_details._id,"ZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYMAAAALL")

},[])

// const formatTime = (timeString) => {
//   const [hours, minutes] = timeString.split(':');
//   const hour = parseInt(hours, 10);
//   const minute = parseInt(minutes, 10);
//   const suffix = hour >= 12 ? 'PM' : 'AM';
//   const formattedHour = hour % 12 || 12;
//   return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${suffix}`;
// };

// 
const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const minute = parseInt(minutes, 10);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${suffix}`;
};


// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });
// };



  // localStorage
  // console.log('aaaaaaaa',receivedObject);

  const submitHandle = () => {

    // setInputValue(e.target.value);
    // setSelectedTime(e);
    // console.log(inputValue,"INPUT VALUE")
    
    
    console.log("YOOOOOOOO!")

    let obj = {
      vendorId: storedUserId,
      customerId: receivedObject._id,
      jobId: receivedObject.job_details._id,
      customerJobDetails: {
        images: receivedObject.job_details?.images,
        details: receivedObject.job_details?.details,
        selected_queries: receivedObject.job_details?.selected_queries
        // customer_job_id: receivedObject.job_details?._id
      },
      customerDetails: {
        Name: receivedObject.Name,
        email: receivedObject.email,
        Home_Address: receivedObject.Home_Address
      },
      // vendorBudget: data,
      status: "pending",
      Paystatus: "unPaid",
      vendorBudget:"0.00",
      ...data
    }
    let time= data.time
    let date= data.date

    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    // shedule_description
    

    // if (!data.vendorBudget) {
    //   toast.error("Please Enter Budget", {
    //     position: "top-center",
    //   });
    // } 
    if(data.time="12:00" && data.shedule_descriptions)
    {
      dispatch(create_schedule_async_service(obj))

      const formattedTime = formatTime(time);

      const messageData = {
        sender: storedUserId, // Assuming storedUserId is the vendorId
        receiver: receivedObject._id, // Assuming receivedObject._id is the customerId
        // message: `Time Picked Successfully. Date: ${formattedDate}, Time: ${formattedTime}` 
        message: `Time Picked Successfully.` 
      };

      socket.emit('send_message', messageData);



    }

    // else if (data.time && !data.shedule_descriptions)
      else if (data.time !='12:00' )
    {
      dispatch(create_schedule_async_service(obj))

      const formattedTime = formatTime(time);
      const messageData = {
        

        sender: storedUserId, // Assuming storedUserId is the vendorId
        receiver: receivedObject._id, // Assuming receivedObject._id is the customerId
        message: `Time Picked Successfully. Date: ${formattedDate}, Time: ${formattedTime}` 
     
     
      };

      socket.emit('send_message', messageData);



    }
    else {
      toast.error("Please Select Time", {
        position: "top-center",
      });
    }
    //  if (!data.time || !data.shedule_descriptions) {
    //   console.log('ddddddddddddddddddd' , data.shedule_descriptions);
    //   toast.error("Please Select TImesss", {
    //     position: "top-center",
    //   });
    // } else {
    //   // console.log(obj);
    //   dispatch(create_schedule_async_service(obj))

    // }



  };

  let InstallmentPerMonth=0;

  const handleInt = ()=>{

    InstallmentPerMonth = cost/inst;

    console.log(InstallmentPerMonth,"ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")

    setData(InstallmentPerMonth,...data)

  }

  const submitHandles = () => {

   
    InstallmentPerMonth = cost/inst;

    console.log(InstallmentPerMonth,"ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")

    // setinstAmt(InstallmentPerMonth);



if (inst>4){

  toast.error("Installments cannot be more than 4")
}

else {


  

    let obj = {
      vendorId: storedUserId,
      customerId: receivedObject._id,
      InstallmentPerMonth:InstallmentPerMonth,
      FullInstallmentCost: parseInt(cost),
      NumberofInstallments:parseInt(inst),
     
      ...data
    }
      dispatch(create_payment_async_service(obj));

      const messageData = {
        sender: storedUserId, // Assuming storedUserId is the vendorId
        receiver: receivedObject._id, // Assuming receivedObject._id is the customerId
        message: `Quote created successfully. Cost: ${obj.FullInstallmentCost}, Number of Installments: ${obj.NumberofInstallments} , Description: ${data.jobtime}`, 
      };
    
      // Emit chat message event with sender, receiver, and message
      socket.emit('send_message', messageData);

   
    }



  };



  const submitHandles1 = () => {

   
    InstallmentPerMonth = cost/inst;

    console.log(InstallmentPerMonth,"ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")

    // setinstAmt(InstallmentPerMonth);



if (inst>4){

  toast.error("Installments cannot be more than 4")
}

else {


  

    let obj = {
      vendorId: storedUserId,
      customerId: receivedObject._id,
      InstallmentPerMonth:InstallmentPerMonth,
      FullInstallmentCost: parseInt(cost),
      NumberofInstallments:parseInt(inst),
      jobId: receivedObject.job_details._id,
     
      ...data
    }
      dispatch(create_payment_async_service(obj));

      const messageData = {
        sender: storedUserId, // Assuming storedUserId is the vendorId
        receiver: receivedObject._id, // Assuming receivedObject._id is the customerId
        message: `Pending Approval!. Cost: ${data.cost}, Description: ${data.duration} , Duration: ${data.jobtime}`, 
      };
    
      // Emit chat message event with sender, receiver, and message
      socket.emit('send_message', messageData);

   
    }



  };





  useEffect(() => {
    if (create_schedule_status === asyncStatus.SUCCEEDED) {
      handleClose();
      dispatch(setCreateSeheduleIdle(setCreateSeheduleIdle))
    }

    if (create_payment_status === asyncStatus.SUCCEEDED) {
      console.log('aaaaaaaaa');
      handleCloses();
      dispatch(setCreatePayment(setCreatePayment))
    }
  }, [, create_schedule_status, create_payment_status, open]);

// let job_id= ''


const formatDatenew = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      
  });
};


const DateFormatCustom=(date)=>{


  let x= date

const month=['ts','January','February','March','April','May','June','July','August','September','October','November','December']

const mm= x.split('-')[1]

const yy=x.split('-')[0]

const dd= x.split('-')[2]


const y= mm[0].includes('0')?mm.split('0')[1]:mm

// console.log(y)

const  final_date= month[y]+" "+ dd+" "+ yy

return final_date

// console.log(dd,month[y],yy)



}



  return (
    <div className="raguraj">
      <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px',
        marginRight:'10px',

      }}
        onClick={handleOpen}
      >
        To Pick a Time
      </button>

      <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px'

      }}
        onClick={handleOpens}
      >
        Create a Quote
      </button>

      <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px',
        marginRight:'10px',
        marginLeft:'10px'

      }}
        onClick={handleinstallmentopen}
      >
        Create Installments
      </button>




      {/* <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px',
        marginRight:'10px',
        marginLeft:'10px'

      }}
        onClick={handlequotetopen}
      >
        Create a Quote
      </button> */}



<div className="create-shedule">

<Modal
  disableScrollLock
  open={open}
  className="scroll-remove"
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      ...style,
      width: { md: "40%", lg: "40%", sm: "80%", xs: "100%" },
      height: { md: "55%", lg: "55%", sm: "50%", xs: "40%" },

      marginLeft:'45px',
     
      overflowY: "scroll",
    }}
    className="scroll_content scroll-remove"
  >
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        sx={{
          fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
          color: "#002758",
          fontWeight: "bold",
          mb: 4
        }}
      >
        {" "}
        Create Schedule
      </Stack>
    </Stack>
   
    <Stack  alignItems={'center'}  gap={1.5}  flexDirection={'column'}  className="random2">
      


        <div className="random1">
      <Stack
        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        Name:
      </Stack>
      <Stack

        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        {receivedObject.Name}
      </Stack>

        </div>
     

   
        {/* <div className="random1">

      <Stack
        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        Email:
      </Stack>
      <Stack

        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        {receivedObject.email}
      </Stack>
        </div> */}

    
    
   
    <Stack flexDirection={'row'} alignItems={'center'} gap={1.5}>


        <div className="random1">

      <Stack
        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        Home Address:
      </Stack>
      <Stack

        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        {receivedObject.Home_Address}
      </Stack>
        </div>




    </Stack>
   
    <Stack flexDirection={'row'} alignItems={'center'} gap={1.5}>


        <div className="random1">

      <Stack
        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        Problem Details:
      </Stack>
      <Stack

        sx={{
          fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
          color: "#646464",
          fontWeight: "bold",
        }}
      >
        {receivedObject.job_details.details}
      </Stack>
        </div>






    </Stack>

    

    
    </Stack>

    
    <Stack flexDirection={'row'} gap={1.5} justifyContent={'center'}>
<Stack px={2} flexDirection={'column'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }} >
  <Stack sx={{ fontSize: 17, fontWeight: 1000, color: 'black' }}> Confirm Availablity: </Stack>
  {

    receivedObject.job_details?.availablity_time?.map((availability, index) => (
   


      <Stack  className="random3"
key={index}
flexDirection={'row'}
alignItems={'center'}
gap={'80px'}
>
{availability?.date  && (
<>
{console.log(receivedObject?.job_details?.availablity_time, "job_detailssssssssssssssssssssttssssts")}
{console.log('Key1:', index)}


{
availability?.date != null &&
<>

<Stack 
  sx={{
    color: selectedDate === availability.date && selectedDateIndex === index ? 'red' : 'black',
    cursor: 'pointer',
  }}
  onClick={() => handleDateClick(availability.date, index)}
> 
{availability.date==='2000-01-01' || availability.date == undefined 
|| receivedObject.job_details.availablity_time === ''? 


<Stack   className="inputshedule">
    <p style={{textAlign:'center'}}>
      {/* {receivedObject.job_details.amount.split('T')[0]} */}
      
      {/* {  new Date(receivedObject.job_details.amount.split('T')[0]).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}  
   */}

   {
   
   receivedObject.job_details.amount.split('T')[0]?
   DateFormatCustom(receivedObject.job_details.amount.split('T')[0]):''} {
receivedObject.job_details.amount.split('T')[1] 
? formatTime(receivedObject.job_details.amount.split('T')[1]) 
: ''
}



    </p>


<input 

  placeholder="Yes or No"


type="text"
value={data.shedule_descriptions}
onChange={(e) => setshedule_description(e)}
  style={{textAlign:'center'}}

>

</input>

</Stack>

: 
  // new Intl.DateTimeFormat('en-US', {
  //   month: 'long',
  //   day: 'numeric',
  //   year: 'numeric',
  // }).format(new Date(availability.date && availability.date != null? availability.date :'Selected' ))}

  new Date(availability.date && availability.date != null ? availability.date : 'Selected').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}


</Stack>
</>
 }

 
<Stack
  flexDirection={'row'}
  alignItems={'center'}
  gap={'35px'}
  fontSize={15}
  ml={1}
>
  {availability.times?.length &&availability?.times[0]!=' ' > 0 ? (
    availability.times.map((time, timeIndex) => (
      <span
        key={timeIndex}
        onClick={() => handleTimeClick(time, index)}
        style={{
          color: selectedTime === time && selectedIndex === index ? 'red' : 'black',
          cursor: 'pointer',
        }}
      > 
        {/* {time? 
        new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }) : ' '
      } */}
      {
time?
//  new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true,
//   })
formatTime(time) : ' '
}
      </span>
    ))

  ) : (
    <span> </span>
    
  )}
</Stack>
</>
)}



</Stack>

    ))
  }
</Stack>
</Stack>
   
 
    <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} mt={2}>

      
     

    </Stack>

  
    <Stack alignItems={'center'}>
    <button style={{
      backgroundColor: vendor_color,
      border: 'none',
      outline: 'none',
      padding: '10px',
      borderRadius: '10px',
      color: 'white',
      fontSize: '16px',
      marginTop: '30px',
      // width: '30%'

    }}
      // onClick={submitHandle}
      onClick={handleCharge}
    >
      Submit
    </button>
    </Stack>







  </Box>
</Modal>

</div>






      <Modal
        disableScrollLock
        open={opens}
        className="scroll-remove"
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "80%", xs: "100%" },
            height: { md: "55%", lg: "55%", sm: "50%", xs: "40%" },

            marginLeft:'45px',
          
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Enter Quote
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
       
       <TextField
       className="create_payment"
         label="Job Description"
         variant="outlined"
         fullWidth
         name="duration"
         value={data.duration}

         onChange={handleInputTitle}
       

         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
         
       />
     <br/>


    
       
       <TextField
        

        label="Job Cost"
        variant="outlined"
        fullWidth
        name="cost"
        value={data.cost}
        onChange={handleInputLocation}
        InputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
        sx={{
          '& .MuiInput-root': {
            borderBottom: '1px solid black', // Border only at the bottom
            borderTop: 'none', // No top border
            borderLeft: 'none', // No left border
            borderRight: 'none', // No right border
          },
          '&:hover .MuiInput-root': {
            borderBottom: '2px solid black', // Increase border thickness on hover
          },
        }}

         
       />

       <br/>

       <TextField
       className="create_payment"
         label="Job Time"
         variant="outlined"
         fullWidth
         name="duration"
         value={data.jobtime}

         onChange={handleInputTitlejobtime}
       

         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
         
       />

       
     </Stack>
          
       

           
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
              }}
            >
              {receivedObject.Budget}
            </Stack>

      
          {/* =============== Customer Budget  ============ */}
          {/* ===============Budget  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} >

           

          </Stack>
          {/* <br/> */}
          <Stack alignItems={'center'}>
        
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
            // width:'30%'

          }}
            onClick={submitHandles1}
            className="Quote_accept_button"
          >
            Submit
          </button>
          </Stack>







        </Box>
      </Modal>



          {/* Installments Logic */}

          <Modal
        disableScrollLock
        open={installmentopen}
        className="scroll-remove"
        onClose={handlecloseinstallment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "80%", xs: "100%" },
            height: { md: "55%", lg: "55%", sm: "50%", xs: "40%" },

            marginLeft:'45px',
           
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Enter Installment Details
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
       
       <TextField
       className="create_payment"
         label="No of Installments"
         variant="outlined"
         fullWidth
         name="duration"
        //  value={data.installments}

         onChange= {(e)=>(setinst(e.target.value))}
       

         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
         
       />
     <br/>
    
       
       <TextField
        

        label="Job Cost"
        variant="outlined"
        fullWidth
        name="cost"
        // value={data.installment_cost}
        onChange={(e)=>(setcost(e.target.value))}
        InputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
        sx={{
          '& .MuiInput-root': {
            borderBottom: '1px solid black', // Border only at the bottom
            borderTop: 'none', // No top border
            borderLeft: 'none', // No left border
            borderRight: 'none', // No right border
          },
          '&:hover .MuiInput-root': {
            borderBottom: '2px solid black', // Increase border thickness on hover
          },
        }}

         
       />

        <br/>


<TextField
       className="create_payment"
         label="Job Description/Time"
         variant="outlined"
         fullWidth
         name="duration"
         value={data.jobtime}

         onChange={handleInputTitlejobtime}
       

         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
         
       />


     </Stack>
          
       

           
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
              }}
            >
              {receivedObject.Budget}
            </Stack>

      
          {/* =============== Customer Budget  ============ */}
          {/* ===============Budget  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} >

           

          </Stack>
          {/* <br/> */}
          <Stack alignItems={'center'}>
        
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
            // width:'30%'



          }}
            onClick={submitHandles}
          >
            Sumbit
          </button>
          </Stack>







        </Box>
      </Modal>





      {/* Create a quote Logic */}

      {/* <Modal
        disableScrollLock
        open={quotetopen}
        className="scroll-remove"
        onClose={handleclosequoteopen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "50%", lg: "50%", sm: "80%", xs: "70%" },
          
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Create No of Quotes for Customer
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
              <Stack>
              <div>
      <input
        type="text"
        value={numInputs}
        onChange={handleInputChange1}
      />
      <button onClick={handleAddInputs}>Add Quotes</button>
      {inputs.map(input => (
        <div key={input.id}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChangeById(input.id, e.target.value)}
          />
          <button onClick={() => handleDelete(input.id)}>Delete</button>
        </div>
      ))}
    </div>
              </Stack>

    
     <br/>
       <br/>

     </Stack>
            <Stack
              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
              }}
            >
              {receivedObject.Budget}
            </Stack>
        
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} >
          </Stack>
      
          <Stack alignItems={'center'}>
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
      
          }}
            onClick={submitHandleQuote}
          >
            Sumbit
          </button>
          </Stack>
        </Box>
      </Modal>
 */}








      


{/*  */}
{
  charge &&

<Charge/>
}






    </div >
  );
}
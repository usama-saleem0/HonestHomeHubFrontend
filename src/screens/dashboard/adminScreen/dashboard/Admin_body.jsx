import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChatScreen from '../../../../component/ChatApp/ChatScreen';
import Recent_Chat from '../../../../component/ChatApp/Recent_Chat';
import '../../dashboardScreens/main.css'
import { Avatar, Container, Grid, Stack, Divider } from '@mui/material';
import back_image from '../../../../assets/back_profile.png'
import User_Details from '../../../../component/ChatApp/User_Details';
import { IoMdArrowRoundBack } from "react-icons/io";
import { setFalseIndex } from '../../../../store/slice/AuthSlice';
import { baseURL, socket } from '../../../../config/apiHandle/apiHandle';
import { useState } from 'react';
import { useEffect } from 'react';
import { get_customer_profile_async_service } from '../../../../services/customerService';
import { user_color } from '../../../../utils/color';
import User_Chats from '../../../../component/ChatApp/User_Chats';
import Recent_Chat_List_Customer from '../../../../component/ChatApp/Recent_Chat_List_Customer';
// import { create_req_async_service } from '../../services/customerService'
import { create_req_async_service } from '../../../../services/customerService'

import ExpertGigModal from '../../../../component/Community/ExpertCommunityModal';
import ExpertSlider from '../../../../component/Slider/ExpertSlider';

import axios from 'axios';
import AdminSideBar from '../AdminSideBar';
import Admin_Templates_SideBar from '../../../../component/drawer/admin/Admin_Templates_SideBar';


const Admin_body = () => {

    const [element,setelement]=useState('')

    const dispatch = useDispatch()
    const selectedLeadIndex = useSelector((state) => state.authSlice);
    const select_index = selectedLeadIndex.selectedLeadIndex
    const { customer_profile_status,
        customer_profile_data,
        customer_profile_error } = useSelector((state) => state.customerAuth)
    const GoBackHandle = () => {
        dispatch(setFalseIndex(setFalseIndex));
    }

    const [vendorData, setVendorData] = useState([]);
    // const customerId = '657b3267b61870438dc6a2da';
    // const expertId = '6570a161252b429f66e5980f';.customerId
        const [request, setRequest] = useState({})
        const [storedUserIds, setStoredUserId] = useState(localStorage.getItem('userId'));
  const [initialUserId, setInitialUserId] = useState(localStorage.getItem('userId'));

  
  let firstelement;
 
  
let talha;

  useEffect(() => {
    // Set the initial userId when the component mounts
    setStoredUserId(localStorage.getItem('userId'));
    setInitialUserId(localStorage.getItem('userId'));
    // Update storedUserId state when the value changes in local storage
    const handleStorageChange = () => {
      setStoredUserId(localStorage.getItem('userId'));
    };
    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);
    



    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
        socket.on("requestFromUser", (requestData) => {
            const customer_profile_data = requestData.customer;
            // const custt = JSON.stringify(requestData.customer);
            // const zero = JSON.parse(custt);
            
            console.log("local user id OF ADMIN", requestData.vendorData)
            const parsedData = JSON.parse(requestData.vendorData);
            setVendorData(parsedData);


   axios.get(`${baseURL}/getadmin/${storedUserId}`)
                .then(response => {
                  console.log('ResponseADMIN ID12344:', response.data.rec[0]);
                   talha = response.data.rec[0];
                  console.log(talha ,'talha');
                //    firstelement = response.data.rec[0];
                setelement(talha);
                
                
                   console.log(selectedQueries,"FIRST ELEMENT");

                   if(talha==selectedQueries){
                    setRequest(requestData)
                                dispatch(get_customer_profile_async_service(requestData.customerId))

                   }

            //        for (let i=0 ; i<selectedQueries.length ; i++) {

            //         console.log(selectedQueries[i],"the best is yet to come");
            
            //         if(talha==selectedQueries[i])
            //         {
            //             setRequest(requestData)
            //             dispatch(get_customer_profile_async_service(requestData.customerId))
            //         }
            
            // }
            
                })
                .catch(error => {
                  console.error('Error:', error);
                });

                            // fetchData()

                // console.log(talha,"popopopopopopopopopop")

        

            
            
            console.log("mil gayi", requestData);


            console.log("mil gayi420");

                    
// Parse the JSON string in the 'customer' property
const customerData = JSON.parse(requestData.customer);

// Access the 'selected_queries' property
const selectedQueries = customerData.selected_queries;


console.log(selectedQueries,"TS"); // Output: ["Plumbing"]

// for (let i=0 ; i<selectedQueries.length ; i++) {

//         console.log(selectedQueries[i],"the best is yet to come");

//         if(talha==selectedQueries[i])
//         {
//             setRequest(requestData)
//             dispatch(get_customer_profile_async_service(requestData.customerId))
//         }

// }


            

                console.log(talha,"popopopopopopopopopop")





        
         
        });
    console.log("customer_profile_data", customer_profile_data)
    // const aabb =  JSON.stringify(customer_profile_data);
    // const bbb = JSON.parse(aabb);
    console.log('aassasasa' ,  customer_profile_data)
    const storedUserId = localStorage.getItem('userId');
    
    console.log('idsssssssssss', storedUserId)

    const [showChat,setshowChat]= useState(true)
    
    const acceptRequestButton = () => {
    console.log('idsssssssssssz', storedUserId)
    
    setshowChat(false)
        
      
        console.log("customer_profile_datassssssssssz", customer_profile_data)
        
        socket.emit("requestAccepted", { ...request, accepted: true, expertId: storedUserId });
       
        setRequest({ ...request, accepted: true, expertId: storedUserId })
        localStorage.setItem('user_details', JSON.stringify(customer_profile_data))
        // localStorage.setItem('user_details',{_id:request.customerId});
        // socket.emit("requestResponse", { expertId: storedUserId })
    }


    const sendDataToParent = (data, index) => {
       
       console.log(data.vendorId)
        
        
      }


    const rechatButton = () => {    
      
        console.log('idsssssssssssz', initialUserId)
        
    //   const ids = '6585931732460a6c4d8579a9'
     
        console.log("customer_profile_datassssssssssz", customer_profile_data)
        
        socket.emit("requestAccepted", { ...request, accepted: true, expertId: initialUserId });
       
        setRequest({ ...request, accepted: true, expertId: initialUserId })
        localStorage.setItem('user_details', JSON.stringify(customer_profile_data))
    
        localStorage.setItem('userId', initialUserId)
        const abcd = localStorage.getItem('userId');
        console.log('aaaaaaa', abcd)
        // localStorage.setItem('user_details',{_id:request.customerId});
        
        // socket.emit("requestResponse", { expertId: storedUserId })
    }
    const rejectRequestButton = () => {
        // socket.emit("requestRejected", { ...request, accepted: false, expertId: storedUserId });
        setRequest({ ...request, reject: true, expertId: storedUserId })
    }
    // socket.on("requestAccepted", a => {
    //     console.log('response a rah ha ', a)
    // })
    socket.on('requestResponse', (data) => {
        console.log('SSSSS:', data);
        // Handle the response from the server (if needed)
    });
   

   

    return (
    


    <div
            className="screen_position_container"
        >

            

                <div  className='hello-ahti'>
                   

           
                <Grid container p={1} >
                    <Grid item md={12} lg={12} sm={12} xs={12} mt={4} >
                        <Stack sx={{ position: 'relative' }}>
                            {/* <img src={back_image} style={{ width: '100%', height: 150 }} /> */}
                            <Stack flexDirection={'row'} gap={2} alignItems={'center'} sx={{ position: 'absolute', top: { lg: 20, sm: 20, xs: 20, md: 20 }, left: 20 }}>
                                {/* <Avatar
                                    alt="Remy Sharp"
                                    sx={{ width: { md: 100, lg: 100, sm: 80, xs: 70 }, height: { md: 100, lg: 100, sm: 80, xs: 70 } }}
                                    src="https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_400_400/0/1516929476300?e=2147483647&v=beta&t=i9xTbCh2nx3upQEx53PPtGP28Da2T7i_AJOTsqQRliE"
                                /> */}
                                {/* <Stack color='white' fontSize={40} fontWeight={1000}>Expert</Stack> */}
                            </Stack>
                        
                            {request.accepted && (
      <Stack alignItems={'end'} sx={{ position: 'absolute', top: { lg: 104, sm: 104, xs: 104, md: 104 }, right: 0 }} className='adminbutton'>
        <button onClick={rechatButton} className='btn-reqs'
        
        style={{
            borderRadius: '10px',
            backgroundColor: 'rgb(1, 186, 242)',
            border: 'none',
            outline: 'none',
            color: 'white',
            fontSize: '15px',
            cursor: 'pointer',
            padding: '10px 20px'
          }}
          
        
        >Back</button>
      </Stack>
    )}
                                            
                            
                        </Stack>
                    </Grid>
                        
               
                    {
                        !request?.accepted && !request.reject ? 
                        <Stack flexDirection={'col'} gap={2} alignItems={'center'} >
                        <Stack p={2}>
                            
                            {
                                request?.customerId ?

                                <div className="popup-container2">
                                <div className="popup2">
                                  <div className="popup-inner">

                                    <div className='main-container-req'>
                                        <div style={{
                                            
                                            display: 'flex',
                                            
                                            justifyContent:'center'
                                           
                                            
                                        }}>
                                            <h1 className='heads' style={{color:'#002758'}}>{customer_profile_data?.Name} Want Advise</h1>
                                        </div>
                                        
                                        <div className='first-flex'>
                                            <div className='heading_class'>Email: {customer_profile_data?.email}</div>
                                            {/* <div className='heading_class'>Home Address: {customer_profile_data?.Home_Address}</div> */}
                                        </div>
                                        <div className='first-flex'>
                                            {/* <div className='heading_class'>Email: {customer_profile_data?.email}</div> */}
                                            <div className='heading_class'>Home Address: {customer_profile_data?.Home_Address}</div>
                                        </div>
                                        
                                        <div  className="admin_button" style={{
                                            // gap: "15px",
                                            // display: 'flex',
                                            // marginTop: '40px',
                                            // justifyContent:'center',
                                            // background:'none'
                                           
                                            
                                        }}>
                                            <button onClick={acceptRequestButton} className='btn-req accept_admin' style={{
                                                
                                            }}>Accept</button>
                                            <button onClick={rejectRequestButton} className='btn-req reject_admin' style={{
                                               
                                            }}>Reject</button>
                                        </div>
                                    </div> 
                                    
                                    </div>  
                                    </div> 
                                     </div> 
                                    
                                    
                                    
                                    
                                    
                                    
                                    : null}
                        </Stack>
                        </Stack>
                            : request.accepted ?

                           
                                <> 
                                
                                      

                               
                                     <Grid item md={8} lg={8} sm={12} xs={12} mt={5} >
                                      
                                        
                                        <Stack px={2} >
                                            <ChatScreen />
                                        </Stack>
                                    </Grid>
                                    <Grid item md={4} lg={4} sm={12} xs={12} mt={5} >
                                        <Stack px={2} mt={{lg:2, md: 2, sm: 5, xs: 8, }}>
                                            {/* <User_Details /> */}
                                            <br/>
                                            <Stack mt={1} >
                                                <Stack mt={2} ml={2} sx={{left: 5 }}>
                                            <Stack sx={{ color: '#002758', fontSize: 26, fontWeight: 1000 }}>Vendor</Stack>
                                            </Stack>
                                            <Divider sx={{ border: '2px solid #002758' }} />
                                            <div>
                                            {vendorData.map((data, index) => (
                                                <div key={index} onClick={() => sendDataToParent(data, index + 1)}>
                                                <p>Vendor Name: {data.Vendor_Name}</p>
                                                <p>Job: {data.Vendor_Schedule_Descriptions}</p>
                                                <p>Vendor Budget: {data.vendorBudget}</p>
                                                <p>Description: {data.shedule_descriptions}</p>
                                                {/* Add more fields as needed */}
                                                </div>
                                            ))}
                                            </div>
                                        
                                                {/* <Recent_Chat_List_Customer /> */}
                                            </Stack>
                                        </Stack>
                                    </Grid> 

                            


                                    
                                


                                </> : null}


                                {showChat
                                
                                && (

                                        <>
                                          <Stack className='king' >
                                        <Stack className='hello-babu'>
                                        <h1>Profile</h1>
                                        <Stack className='my-btn'>

                                        <ExpertGigModal/>
                                        </Stack>
                                      
                                     
                                        </Stack>

                                        <Stack  className='admin-69'>
                                           
                                       
                                            <ExpertSlider/>

                                        </Stack>
                                        </Stack>   
                                        </>

                                )
                                
                                }

                                     {/* <Stack className='king' >
                                        <Stack className='hello-babu'>
                                        <h1>Profile</h1>
                                        <Stack className='my-btn'>

                                        <ExpertGigModal/>
                                        </Stack>
                                      
                                     
                                        </Stack>

                                        <Stack >
                                           
                                       
                                            <ExpertSlider/>

                                        </Stack>
                                        </Stack>            */}

                                {/* <h1>TT</h1> */}
                </Grid>

                <div  className='sidebar-admin'>
            <AdminSideBar/>
            </div>



            </div>
            {/* <div >
                    <Admin_Templates_SideBar className="ts"
         
        />
                    </div> */}

           
        </div >
    )
}
export default Admin_body


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { baseURL } from "../../config/apiHandle/apiHandle";


// const Master_Control=()=>{

//     const [all_jobs,setall_jobs]= useState([])
//     const [job_count,setjob_count]= useState()

//     const [selectedOption, setSelectedOption] = useState('');

 
//     const handleChange = (id, event) => {
//         setSelectedOption({
//           ...selectedOption,
//           [id]: event.target.value,
//         });
//       };

//     useEffect(()=>{

//         axios.get(`${baseURL}/getalljobs`)
//         .then((response)=>{

//             console.log(response.data,"Show All Jobs")
//             setall_jobs(response.data.Jobs)
//             setjob_count(response.data.Jobs_Count)




//         })
//         .catch((error)=>{
//             console.log(error)
//         })

         



// },[])

// return (
//     <div>
//         mASTER Control

//             {
//                 all_jobs.length>0 && all_jobs.map((e,i)=>(


//                     <div key={i}>
//                         <div style={{
//                             backgroundColor:'lightgoldenrodyellow',

//                             display:'flex',
//                             flexDirection:'column',
//                             margin:'20px'
//                         }}>

//                         <p>
                            
//                        Home Service: {e.selected_queries}
//                             </p>
//                             <p>

//                        Description: {e.details}
//                             </p>
//                             <p>

//                      ZipCode: {e.zipcode}
//                             </p>
//                             <p>
//                      Emergency/LandScaping/Cleaning Date: {e.amount}
//                                 </p>

//                                 <p>
//                    Location: {e.location}
//                                 </p>

//                                 <p>

// Job Progress: {e.phase}
//        </p>

//                                 <div style={{
                                                 
//                                                 display:'flex',
//                                                 flexDirection:'row',
//                                                 gap:"20px",
//                                                 alignItems:'center'
//                                             }}>
//                                     Images:
//                                     {
//                                         e.images!=null && e.images.map((e,i)=>(
//                                             <div key={i} >
//                                             <img src={e} style={{width:'50px',height:'50px'}}/>
//                                             </div>
//                                         ))
//                                     }
//                                     </div>



//                                     <div>
//                                         Change Job Progress:
//                                         <label htmlFor="options">Choose an option:</label>
//       <select id="options" value={selectedOption} onChange={(event) => handleChange(i, event)}>
//         <option value="">--Please choose an option--</option>
//     <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>

//       <p>You selected: {selectedOption}</p>

//                                     </div>
//                             </div>
                                

//                     </div>


//                 ))
//             }


//     </div>
// )


// }

// export default Master_Control;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/apiHandle/apiHandle";
import logo from "../../assets/new/logo1.png"
const Master_Control = () => {
  const [all_jobs, setall_jobs] = useState([]);
  const [job_count, setjob_count] = useState();
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (id, event) => {
    setSelectedOptions({
      ...selectedOptions,
      [id]: event.target.value,
    });
  };

  useEffect(() => {
    get_all_jobs()
  }, []);

  const get_all_jobs=async()=>{
    axios
    .get(`${baseURL}/getalljobs`)
    .then((response) => {
      console.log(response.data, "Show All Jobs");
      setall_jobs(response.data.Jobs);
      setjob_count(response.data.Jobs_Count);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const update_job = (job_id) => {
    const selectedValue = selectedOptions[job_id];
    console.log(`Job ID: ${job_id}, Selected Option: ${selectedValue}`);

    handlepostSubmit(job_id,selectedValue)
    // You can also send this data to the server via an API call here
  };

  const handlepostSubmit = async (job_id,selectedValue) => {
     
    
    try {
        const response = await axios.put(`${baseURL}/updatejobmaster/${job_id}`, {
            selectedValue,
            
        });

        console.log('User updated:', response.data);
        get_all_jobs()
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

  return (
    <div style={{padding: "2rem", color:"#FFFFFF", background: "#000000"}}>
        <div style={{display: "flex", alignItems: "center"}}>

        <img style={{width:"3rem",  flexShrink:"0"}} src={logo} />
      <h1 style={{textAlign:"center",margin:"0 auto"}}>Edit Job Progress</h1>
        </div>
      {all_jobs.length > 0 &&
        all_jobs.map((job, index) => (
          <div key={index}>
            <div
              style={{
                backgroundColor: "#B22234",
                display: "flex",
                flexDirection: "column",
                margin: "20px",
                padding: "1rem",
                borderRadius: "2rem",
                alignItems: "flex-start"
              }}
            >
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>Home Service: {job.selected_queries}</p>
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>Order ID: {job.Order_Id}</p>
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>Description: {job.details}</p>
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>ZipCode: {job.zipcode}</p>
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>Emergency/Landscaping/Cleaning Date: {job.amount}</p>
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>Location: {job.location}</p>
              <p style={{    width: "100%" ,wordWrap: "break-word"}}>Job Progress: {job.phase}</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  alignItems: "center",overflowX:"scroll", width:"100%"
                }}
                className="master-image-cont"
              >
                Images:
                {job.images != null &&
                  job.images.splice(0,4).map((image, i) => (
                    <div  key={i}>
                      <img src={image} style={{ width: "50px", height: "50px" }} />
                    </div>
                  ))}
              </div>

              <div>
                Change Job Progress:
                <select
                  id={`options-${job._id}`}
                  value={selectedOptions[job._id] || ""}
                  onChange={(event) => handleChange(job._id, event)}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Job Created">Job Created</option>
                  <option value="Currently in Pick a Vendor Phase">Currently in Pick a Vendor Phase</option>
                  <option value="Currently in a Vendor Visit Phase">Currently in a Vendor Visit Phase</option>
                  <option value="Quotes Selected">Quotes Selected</option>
                  <option value="Quotes Created">Quotes Created</option>
                  <option value="Pay the Vendor">Pay the Vendor</option>
                  <option value="Chat Now And Review">Chat Now And Review</option>
                </select>

                <p>You selected: {selectedOptions[job._id]}</p>
              </div>

              <button style={{padding: ".5em", backgroundColor:"rgb(0 39 88)", border: "2px solid #B22234", borderRadius:".5rem", color:"#FFFFFF"}} onClick={() => update_job(job._id)}>Update Job Progress</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Master_Control;

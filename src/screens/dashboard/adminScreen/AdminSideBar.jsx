import React from "react";
import adminimg from '../../../assets/adminbyby.png'
import muto from '../../../assets/admin-clean.png'


const AdminSideBar = ()=>{

return(

        <div className="hello-admin">


            <div  className="admin-logo-body">
 
            <img src={adminimg}/>
 <span>
    {/* <h2>Elia Watson</h2> */}
    <h3>
    Expert
    </h3>
 </span>



            </div>

            {/* <div className="admin-card-body">
                <h3>Total Helped</h3>
                <h2>1,022</h2>
            </div> */}
<div className="admin-imger-body"> 

<img src={muto}/>

<p style={{color:'#002758'}}>It’s Look Like a Beautiful Day</p>
</div>

        </div>
)

}



export default AdminSideBar
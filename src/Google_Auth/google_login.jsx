 

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Google_login = ({handle_google_callBack}) => {
    const navigate = useNavigate()
  const handleLoginSuccess = (credentialResponse) => {
    let jwt_response= jwtDecode(credentialResponse.credential)
    console.log('Login Success:', credentialResponse,jwt_response);
    handle_google_callBack(jwt_response)
                 

    
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
     
  };

  return (
    <div>
     
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default Google_login;



// import React from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';

// const GoogleLoginCustom = () => {
//     const navigate = useNavigate();

//     const login = useGoogleLogin({
//         onSuccess: (credentialResponse) => {
//             let jwt_response = jwtDecode(credentialResponse.credential);
//             console.log('Login Success:', credentialResponse, jwt_response);
//             navigate('/rating');
//         },
//         onError: (error) => {
//             console.error('Login Failed:', error);
//         }
//     });

//     return (
//         <div>
//             <h1>Google Sign-In</h1>
//             <div 
//                 style={{
//                     padding: '10px',
//                     backgroundColor: '#4285F4',
//                     color: 'white',
//                     cursor: 'pointer',
//                     textAlign: 'center',
//                     borderRadius: '5px',
//                     width: '200px',
//                     margin: '0 auto'
//                 }}
//                 onClick={login}
//             >
//                 Click here to Sign in with Google
//             </div>
//         </div>
//     );
// };

// export default GoogleLoginCustom;


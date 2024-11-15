import Dashboard from "../screens/dashboard/Dashboard";
import { GoHome } from "react-icons/go";
import Dashboard_Screen from "../screens/dashboard/dashboardScreens/Dashboard";
import Signup from "../screens/auth/signup/signup";
import Login from "../screens/auth/login/login";
import ForgotPassword from "../screens/auth/forgotPassword/forgotPassword";
import VerifyOtpPassword from "../screens/auth/verifyOtp/verifyOtpPassword";
import ResetPassword from "../screens/auth/resetPassword/resetPassword";
import LandingPage from "../screens/dashboard/LandingPage";
import MainSection from "../screens/auth/section/MainSection";




import AdminLogin from "../screens/dashboard/adminScreen/auth/AdminLogin";
import Admin_Dashboard from "../screens/dashboard/adminScreen/dashboard/Dashboard";
import ChatApp from "../chatApp";
import MainSectiontwo from "../screens/auth/section/MainSectionTwo";
// import SignUpMainSection from "../screens/auth/section/SignUpMainSection";
// import MainSectiontwo from "../screens/auth/section/MainSectiontwo";
// import SignUpMainSection fro../screens/auth/section/SignUpMainSectionon";

import PrivacyPolicy from "../component/PrivacyPolicy";
import CustomerPolicy from "../component/CustomerPolicy";
import VendorPolicy from "../component/VendorPolicy";

import ForgotPassworde from "../screens/auth/forgotPassword/forgotPassworde";
// import Footer1 from "../component/footer/Footer1";
// import Footer1 from "../component/footer/footer1";
import ForgotPasswordv from "../screens/auth/forgotPassword/forgotPasswordv";
import VerifyOtpPasswordv from "../screens/auth/verifyOtp/VerifyOtpPasswordv";
import VerifyOtpPassworde from "../screens/auth/verifyOtp/VerifyOtpPassworde";
import ResetPassworde from "../screens/auth/resetPassword/resetPassworde";
import ResetPasswordv from "../screens/auth/resetPassword/resetPasswordv";
import FiveStarRating from "../component/Community/Rating";
import Steps from "../component/CreatePostCard/Steps";

import ShowAllVendors from "../Dylan_Admin_Portal/Dylan_Admin_Portal/ShowAllVendors";

import Customer_Vendor from "../Dylan_Admin_Portal/Dylan_Admin_Portal/View_Customer_Vendor_Job_details";
import Dylan_Dashboard from "../Dylan_Admin_Portal/Dylan_Admin_Portal/Dylan_Dashboard";
import ShowAllJobs from "../Dylan_Admin_Portal/Dylan_Admin_Portal/Show_All_Jobs";
import Show_All_Customers from "../Dylan_Admin_Portal/Dylan_Admin_Portal/Show_All_Customers";
import ShowCustomerProfile from "../Dylan_Admin_Portal/Dylan_Admin_Portal/ShowCustomerProfile";
import SignInFormDylan from "../Dylan_Admin_Portal/Dylan_Admin_Portal/Admin_SignIn";
import Maintainence_Steps from "../component/CreatePostCard/Maintainence_Steps";

import Howitworkcustomer from "../component/HowitWorkcustomer";
import Contactpoph from "../screens/dashboard/component/Contachuspopup-h";
import Howitworkvendor from "../component/HowitWorkVendor";
import Rewards_Screen from "../Rewards/Rewards_Screen";
import ShowAllVendorsDetailed from "../Dylan_Admin_Portal/Dylan_Admin_Portal/ShowDetailed_vendorList";
import Master_Control from "../Dylan_Admin_Portal/Dylan_Admin_Portal/Master_Control";

import MemoizedLandingPage from "../../src/screens/dashboard/LandingPage" 

import Newmy1 from "../component/new-page-my/New_my_1";
import Newmy2 from "../component/new-page-my/New_my_2";
import Newmy3 from "../component/new-page-my/New_my_3";
import Newmy4 from "../component/new-page-my/New_my_4";
import Newmy5 from "../component/new-page-my/New_my_5";
import Newmy6 from "../component/new-page-my/New_my_6";
import Newmy7 from "../component/new-page-my/New_my_7";
import Newmy8 from "../component/new-page-my/New_my_8";
import ChatScreen from "../component/ChatApp/NewChatscreen";
import TSChat from "../screens/NewChatTS";


import Newsalidebox from "../component/ahti-new-component/Newsalidebox";
import Componet from "../component/ahti-new-component/Componet";
import LogoSlider from "../component/ahti-new-component/Ahtisalider";

export const main_routes = [
  // {
  //   caption: "chatapp",
  //   linkTo: "/",
  //   element: <ChatApp />,
  //   auth_required: false,
  // },
  {
    caption: "LandingPage",
    linkTo: "/",
    // element: <LandingPage />,
    element: <MemoizedLandingPage />,
    auth_required: false,
  },
  // {
  //   caption: "Login",
  //   linkTo: "/login",
  //   element: <Login />,
  //   auth_required: false,
  // },
  {
    caption: "Signup",
    linkTo: "/signup",
    element: <Signup />,
    auth_required: false,
  },


  {
    caption: "LogoSlider",
    linkTo: "/LogoSlider",
    element: <LogoSlider />,
    auth_required: false,
  },

  {
    caption: "thankyou",
    linkTo: "/thankyou",
    element: <Componet />,
    auth_required: false,
  },

  {
    caption: "Newsalidebox",
    linkTo: "/Newsalidebox",
    element: <Newsalidebox/>,
    auth_required: false,
  },



  {
    caption: "Newsalidebox",
    linkTo: "/Newsalidebox",
    element: <Newsalidebox/>,
    auth_required: false,
  },

  // {
  //   caption: "MainSection",
  //   linkTo: "/mainsection",
  //   element: <MainSection />,
  //   auth_required: false,
  // },
  {
    caption: "MainSection",
    linkTo: "/login/:login_type",
    element: <MainSection />,
    auth_required: false,
  },
  {
    caption: "MainSectiontwo",
    linkTo: "/signup/:signup_type",
    element: <MainSectiontwo />,
    auth_required: false,
  },
  // {
  //   caption: "MainSectiontwo",
  //   linkTo: "/mainSectiontwo",
  //   element: <MainSectiontwo />,
  //   auth_required: false,
  // },

  {
    caption: "rating",
    linkTo: "/rating",
    element: <FiveStarRating />,
    auth_required: false,
  },

  {
    caption: "steps",
    linkTo: "/selectvendor/:id",
    element: <Steps />,
    auth_required: false,
  },

  {
    caption: "steps",
    linkTo: "/Maintainence_Steps/:id",
    element: <Maintainence_Steps />,
    auth_required: false,
  },

  {
    caption: "total_vendors",
    linkTo: "/totalvendors",
    element: <ShowAllVendors />,
    auth_required: false,
  },

  {
    caption: "total_vendors",
    linkTo: "/Customer_Vendor_Job_Details/:id",
    element: <Customer_Vendor />,
    auth_required: false,
  },

  {
    caption: "customer_profile",
    linkTo: "/admin_customer_profile/:id",
    element: <ShowCustomerProfile />,
    auth_required: false,
  },

  {
    caption: "dylan_dashboard",
    linkTo: "/admin_signin_dashboard",
    element: <SignInFormDylan />,
    auth_required: false,
  },

  {
    caption: "dylan_dashboard",
    linkTo: "/dylan_dashboard",
    element: <Dylan_Dashboard />,
    auth_required: false,
  },

  {
    caption: "showalljobs",
    linkTo: "/showalljobs",
    element: <ShowAllJobs />,
    auth_required: false,
  },

  {
    caption: "showallcustomers",
    linkTo: "/showallcustomers",
    element: <Show_All_Customers />,
    auth_required: false,
  },

  // {
  //   caption: "SignUpMainSection ",
  //   linkTo: "/signUpMainSection ",
  //   element: <SignUpMainSection />,
  //   auth_required: false,
  // },
  // {
  //   caption: "verifyOtp",
  //   linkTo: "/verifyOtp",
  //   element: <VerifyOtp />,
  //   auth_required: false,
  //   otpScreen: true,
  // },

  {
    caption: "ForgotPassword",
    linkTo: "/forgotPassword",
    element: <ForgotPassword />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ForgotPassword",
    linkTo: "/forgotPasswordv",
    element: <ForgotPasswordv />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ForgotPassword",
    linkTo: "/forgotPassworde",
    element: <ForgotPassworde />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ResetPassword",
    linkTo: "/resetPassword",
    element: <ResetPassword />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ResetPassword",
    linkTo: "/resetPassworde",
    element: <ResetPassworde />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ResetPassword",
    linkTo: "/resetPasswordv",
    element: <ResetPasswordv />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPassword",
    element: <VerifyOtpPassword />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPasswordv",
    element: <VerifyOtpPasswordv />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPassworde",
    element: <VerifyOtpPassworde />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "Dashboard",
    linkTo: "/dashboard/vendor",
    element: <Dashboard />,
    auth_required: false,
  },

  {
    caption: "Dashboard",
    linkTo: "/dashboard/customer",
    element: <Dashboard />,
    auth_required: false,
  },

  {
    caption: "Dashboard",
    linkTo: "/dashboard/newcustomer",
    element: <Dashboard />,
    auth_required: false,
  },

  {
    caption: "AdminLogin",
    linkTo: "/AdminLogin",
    element: <AdminLogin />,
    auth_required: false,
  },
  {
    caption: "Admin_Dashboard",
    linkTo: "/Admin_Dashboard",
    element: <Admin_Dashboard />,
    auth_required: false,
  },

  {
    caption: "PrivacyPolicy",
    linkTo: "/privacypolicy",
    element: <PrivacyPolicy />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "Rewards_Screen",
    linkTo: "/rewards",
    element: <Rewards_Screen />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "CustomerPolicy",
    linkTo: "/customerpolicy",
    element: <CustomerPolicy />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "CustomerPolicy",
    linkTo: "/vendorlist",
    element: <ShowAllVendorsDetailed />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "ts",
    linkTo: "/chatwithvendor",
    element: <TSChat />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "Master_Control",
    linkTo: "/admin-jobs-edit",
    element: <Master_Control />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "VendorPolicy",
    linkTo: "/vendorpolicy",
    element: <VendorPolicy />,
    // element: <Footer1 />,
    auth_required: false,
  },

  {
    caption: "HowItWorkCustomer",
    linkTo: "/howitworkscustomer",
    element: <Howitworkcustomer />,
    auth_required: false,
  },

  {
    caption: "ChatScreen",
    linkTo: "/chatscreen",
    element: <ChatScreen />,
    auth_required: false,
  },
  {
    caption: "HowItWorkVendor",
    linkTo: "/howitworksvendor",
    element: <Howitworkvendor />,
    auth_required: false,
  },
  {
    caption: "Contactuspopuph",
    linkTo: "/contactpoph",
    element: <Contactpoph />,
    auth_required: false,
  },


  {
    caption: "Newmy1",
    linkTo: "/Newmy1",
    element: <Newmy1 />,
    auth_required: false,
  },

  {
    caption: "Newmy2",
    linkTo: "/Newmy2",
    element: <Newmy2 />,
    auth_required: false,
  },


  {
    caption: "Newmy3",
    linkTo: "/Newmy3",
    element: <Newmy3 />,
    auth_required: false,
  },


  {
    caption: "Newmy4",
    linkTo: "/Newmy4",
    element: <Newmy4 />,
    auth_required: false,
  },


  {
    caption: "Newmy5",
    linkTo: "/Newmy5",
    element: <Newmy5 />,
    auth_required: false,
  },


  {
    caption: "Newmy6",
    linkTo: "/Newmy6",
    element: <Newmy6 />,
    auth_required: false,
  },


  {
    caption: "Newmy7",
    linkTo: "/Newmy7",
    element: <Newmy7 />,
    auth_required: false,
  },


  {
    caption: "Newmy8",
    linkTo: "/Newmy8",
    element: <Newmy8 />,
    auth_required: false,
  },


];
export const sideBarData = [
  {
    name: "Dashboard",
    linkTo: "/dashboard",
    icon: <GoHome size={20} />,
    element: <Dashboard_Screen />,
    both: true,
    list_in_sidebar: true,
  },
];

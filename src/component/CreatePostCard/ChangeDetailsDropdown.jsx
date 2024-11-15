import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import settingbutton from "../../../src/assets/settings.png";

import axios from "axios";
import { Email } from "@mui/icons-material";
const ChangeSetting = ({ userInfo }) => {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showPaymentOptionsForm, setShowPaymentOptionsForm] = useState(false);

  const [showviewProfileForm, setshowviewProfileForm] = useState(false);

  const [showViewPaymentOptionsForm, setshowViewPaymentOptionsForm] =
    useState(false);
  const [profile, setProfile] = useState(userInfo);
  const [editableFields, setEditableFields] = useState({
    fullName: false,
    email: false,
    phone: false,
    address: false,
  });
  // Synchronize profile state with userInfo prop
  useEffect(() => {
    setProfile(userInfo);
  }, [userInfo]);
  const handleEditClick = (field) => {
    setEditableFields({ ...editableFields, [field]: true });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to submit the updated profile details
    console.log("Updated profile:", profile);
    // Reset editable fields
    setEditableFields({
      fullName: false,
      email: false,
      phone: false,
      address: false,
    });
    console.log(editableFields, "Editable FIELDSSSS");
    setShowProfileForm(false);
  };
  const handleProfileFormClick = () => {
    setShowProfileForm(true);
  };
  const handlePaymentOptionsClick = () => {
    setShowPaymentOptionsForm(true);
  };

  const handleViewPaymentOptionsClick = () => {
    setshowViewPaymentOptionsForm(true);
  };

  const handleViewProfileInfoOptionsClick = () => {
    setshowviewProfileForm(true);
  };

  // https://honesthome-backend-6d8f37871a1b.herokuapp.com

  const handlePaymentOptionsSubmit = async (e) => {
    e.preventDefault();

    console.log(
      bankname,
      accountname,
      accountnumber,
      iban,
      "Bank Details",
      profile.customer_id
    );
    // alert(profile.customer_id)

    const formData = {
      _id: profile.customer_id,
      bankName: bankname,
      accountName: accountname,
      accountNumber: accountnumber,
      iban: iban,
    };

    try {
      const response = await axios.post(
        "https://honesthome-backend-6d8f37871a1b.herokuapp.com/customercreatebank",
        formData
      );
      console.log(response.data);
      window.location.reload();
      // Handle success
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle error
    }

    setShowPaymentOptionsForm(false);
  };

  const [accountname, setaccountname] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [iban, setiban] = useState("");
  const [bankname, setbankname] = useState("");

  const handleUpdateProfileInfo = async (e) => {
    e.preventDefault();

    console.log(Name, email, phoneno, Home_Address, "UPDATE USERRRRRRR");

    const formData = {
      _id: profile.customer_id,
      Name: Name,
      email: email,
      phoneno: phoneno,
      Home_Address: Home_Address,
    };

    try {
      const response = await axios.post(
        "https://honesthome-backend-6d8f37871a1b.herokuapp.com/updateuserdetails",
        formData
      );
      console.log(response.data);
      window.location.reload();
      // Handle success
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle error
    }
  };

  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [Home_Address, setHome_Address] = useState("");

  return (
    <>
      <Dropdown className="">
        <Dropdown.Toggle variant="" id="">
          <img
            src={settingbutton}
            alt=""
            className="setting-img"
            style={{ width: "25px" }}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleProfileFormClick}>
            View Information
          </Dropdown.Item>
          <Dropdown.Item onClick={handleViewProfileInfoOptionsClick}>
            Change Information{" "}
          </Dropdown.Item>
          <Dropdown.Item onClick={handlePaymentOptionsClick}>
            Payment Options
          </Dropdown.Item>
          <Dropdown.Item onClick={handleViewPaymentOptionsClick}>
            View Payment{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showProfileForm && (
        <div
          className="modal fade show"
          id="profileModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="profileModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal--dialog--alt--h" role="document">
            <div className="modal-content">
              <div
                style={{ justifyContent: "space-between" }}
                className="modal-header"
              >
                <h5 className="modal-title" id="profileModalLabel">
                  Profile Details
                </h5>
                <button
                  type="button"
                  className="close close--btn--alt--h"
                  onClick={() => setShowProfileForm(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="formoo">
                  <div className="form-groupoo">
                    <label htmlFor="fullName">Full Name</label>

                    <p>{profile.fullName}</p>

                    {/* <input type="text" className="form-control" id="fullName" name="fullName" value={profile.fullName} onChange={handleInputChange} readOnly={!editableFields.fullName} /> */}
                    {/* {!editableFields.fullName && <button type="button" className="btn btn-secondary" onClick={() => handleEditClick('fullName')}>Edit</button>} */}
                  </div>
                  <div className="form-groupoo">
                    <label htmlFor="email">Email address</label>
                    <p>{profile.email}</p>
                    {/* <input type="email" className="form-control" id="email" name="email" value={profile.email} onChange={handleInputChange} readOnly={!editableFields.email} />
                    {!editableFields.email && <button type="button" className="btn btn-secondary" onClick={() => handleEditClick('email')}>Edit</button>} */}
                  </div>
                  <div className="form-groupoo">
                    <label htmlFor="phone">Phone Number</label>
                    <p>{profile.phone}</p>
                    {/* <input type="text" className="form-control" id="phone" name="phone" value={profile.phone} onChange={handleInputChange} readOnly={!editableFields.phone} />
                    {!editableFields.phone && <button type="button" className="btn btn-secondary" onClick={() => handleEditClick('phone')}>Edit</button>} */}
                  </div>
                  <div className="form-groupoo">
                    <label htmlFor="address">Address</label>
                    <p>{profile.address}</p>
                    {/* <textarea className="form-control" id="address" name="address" rows="3" value={profile.address} onChange={handleInputChange} readOnly={!editableFields.address}></textarea>
                    {!editableFields.address && <button type="button" className="btn btn-secondary" onClick={() => handleEditClick('address')}>Edit</button>} */}
                  </div>
                  {/* <button type="submit" className="btn btn-primary">Update Profile</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Payment Options Form */}

      {showPaymentOptionsForm && (
        <div
          className="modal fade show"
          id="paymentOptionsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="paymentOptionsModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal--dialog--alt--h" role="document">
            <div className="modal-content">
              <div
                style={{ justifyContent: "space-between" }}
                className="modal-header"
              >
                <h5 className="modal-title" id="paymentOptionsModalLabel">
                  {" "}
                  Add Payment{" "}
                </h5>
                <button
                  type="button"
                  className="close close--btn--alt--h"
                  onClick={() => setShowPaymentOptionsForm(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePaymentOptionsSubmit} className="formkk">
                  <div className="form-groupkk">
                    <label htmlFor="accountHolderName">
                      Account Holder's Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountHolderName"
                      name="accountHolderName"
                      value={accountname}
                      onChange={(e) => setaccountname(e.target.value)}
                    />
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      name="accountNumber"
                      value={accountnumber}
                      onChange={(e) => setaccountnumber(e.target.value)}
                    />
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="iban">
                      IBAN (International Bank Account Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="iban"
                      name="iban"
                      value={iban}
                      onChange={(e) => setiban(e.target.value)}
                    />
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="bankName">Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankName"
                      name="bankName"
                      value={bankname}
                      onChange={(e) => setbankname(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-groupkk">
                    <label htmlFor="bankAddress">Bank Address</label>
                    <input type="text" className="form-control" id="bankAddress" name="bankAddress" />
                  </div> */}
                  <button
                    style={{
                      marginTop: "5px",
                      backgroundColor: "#0874B7",
                      borderColor: "#0874B7",
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showViewPaymentOptionsForm && (
        <div
          className="modal fade show"
          id="paymentOptionsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="paymentOptionsModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal--dialog--alt--h" role="document">
            <div className="modal-content">
              <div
                style={{ justifyContent: "space-between" }}
                className="modal-header"
              >
                <h5 className="modal-title" id="paymentOptionsModalLabel">
                  View Payment Details{" "}
                </h5>
                <button
                  type="button"
                  className="close close--btn--alt--h"
                  onClick={() => setshowViewPaymentOptionsForm(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePaymentOptionsSubmit} className="formkk">
                  <div className="form-groupkk">
                    <label htmlFor="accountHolderName">
                      Account Holder's Name
                    </label>
                    {/* <input type="text" className="form-control" id="accountHolderName" name="accountHolderName" value={accountname} onChange={(e)=>setaccountname(e.target.value)} /> */}
                    <p>{profile.accountName}</p>
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="accountNumber">Account Number</label>
                    {/* <input type="text" className="form-control" id="accountNumber" name="accountNumber" value={accountnumber} onChange={(e)=>setaccountnumber(e.target.value)} /> */}
                    <p>{profile.accountNumber}</p>
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="iban">
                      IBAN (International Bank Account Number)
                    </label>
                    <p>{profile.iban}</p>
                    {/* <input type="text" className="form-control" id="iban" name="iban"  value={iban} onChange={(e)=>setiban(e.target.value)}/> */}
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="bankName">Bank Name</label>
                    <p>{profile.bankName}</p>
                    {/* <input type="text" className="form-control" id="bankName" name="bankName" value={bankname} onChange={(e)=>setbankname(e.target.value)} /> */}
                  </div>
                  {/* <div className="form-groupkk">
          <label htmlFor="bankAddress">Bank Address</label>
          <input type="text" className="form-control" id="bankAddress" name="bankAddress" />
        </div> */}
                  {/* <button type="submit" className="btn btn-primary">Save</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showviewProfileForm && (
        <div
          className="modal fade show"
          id="paymentOptionsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="paymentOptionsModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal--dialog--alt--h" role="document">
            <div className="modal-content">
              <div
                style={{ justifyContent: "space-between" }}
                className="modal-header"
              >
                <h5 className="modal-title" id="paymentOptionsModalLabel">
                  Change Profile Info
                </h5>
                <button
                  type="button"
                  className="close close--btn--alt--h"
                  onClick={() => setshowviewProfileForm(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateProfileInfo} className="formkk">
                  <div className="form-groupkk">
                    <label htmlFor="accountHolderName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountHolderName"
                      name="accountHolderName"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="accountNumber">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      name="accountNumber"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="iban">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="iban"
                      name="iban"
                      value={phoneno}
                      onChange={(e) => setphoneno(e.target.value)}
                    />
                  </div>
                  <div className="form-groupkk">
                    <label htmlFor="bankName">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankName"
                      name="bankName"
                      value={Home_Address}
                      onChange={(e) => setHome_Address(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-groupkk">
                  <label htmlFor="bankAddress">Bank Address</label>
                  <input type="text" className="form-control" id="bankAddress" name="bankAddress" />
                </div> */}
                  <button
                    style={{
                      marginTop: "5px",
                      backgroundColor: "#b22234",
                      borderColor: "#b22234",
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ChangeSetting;

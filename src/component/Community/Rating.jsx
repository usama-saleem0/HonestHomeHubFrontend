import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { baseURL } from "../../config/apiHandle/apiHandle";
const FiveStarRating = ({ J_ID, selected_schedule_id }) => {
  const [rating, setRating] = useState(0);
  const [review, setreview] = useState("");
  useEffect(() => {
    // This useEffect will run every time the rating state changes
    // alert(rating);
  }, [rating]); // Depend on the rating state
  const handleClick = (value) => {
    setRating(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      review: review,
      rating: rating,

      JobId: J_ID,
      selected_schedule_id: selected_schedule_id,
    };
    console.log(formData, "FORM DATA");
    axios.post(`${baseURL}/customer_review`, formData).then((res) => {
      console.log(res.data.message, "REVIEW");
      if (res.data.message == "Review Posted Successfully") {
        toast.success("Review Posted Successfully");
        window.location.reload();
      }
    });
  };
  return (
    <div className="hello-my-new-long0box">
      <div className="Review-Form" style={{ backgroundColor: "#0874B7" }}>
        <div className="hello-my-new-code">
          <div className="hello-my-new-code-tital">
            <h1 style={{ color: "#fff", paddingBottom: "10px" }}>
              How did the vendor do?
            </h1>

            <p style={{ color: "#fff" }}>
              By writing 1-2 short sentences and giving a rating out of 5 you
              allow us to make sure that we can know who are the best vendors in
              your area for you and your neighbors.
            </p>
          </div>
          {/* <textarea onChange={(e)=>{setreview(e.target.value)}}  >
</textarea> */}

          <div className="hello-my-new-input">
            <input
              onChange={(e) => {
                setreview(e.target.value);
              }}
              style={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                width: "100%",
              }}
              placeholder="Tell us about the vendor"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  filled={value <= rating}
                  onClick={() => handleClick(value)}
                />
              ))}
            </div>
          </div>

          {/* <p>Current rating: {rating}</p> */}
          <form
            onSubmit={handleSubmit}
            style={{ textAlign: "center" }}
            className="my-new-form-box"
          >
            <button
              style={{
                textAlign: "center",
                borderRadius: "10px",
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
                color: "#002758",
                fontSize: "15px",
                padding: "10px 70px",
                fontweight: "bold",
                justifyContent: "center",
              }}
            >
              Submit & Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const Star = ({ filled, onClick }) => {
  return (
    <div className="Stars">
      <span
        style={{
          cursor: "pointer",
          color: filled ? "#FFF" : "#FFF",
          fontSize: "60px",
          borderRadius: "10px",
        }}
        onClick={onClick}
      >
        {filled ? "★" : "☆"}
      </span>
    </div>
  );
};
export default FiveStarRating;

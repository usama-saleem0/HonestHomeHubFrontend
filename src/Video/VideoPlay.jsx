import React from "react";

const PulseButton = () => {
  return (
    <button style={buttonStyle} className="pulse-button">
      <svg
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="26px"
      >
        <path
          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  color: "#fff",
  width: "80px",
  height: "80px",
  borderRadius: "100%",
  background: "linear-gradient(30deg, rgb(255, 130, 0) 20%, rgb(255, 38, 0) 80%)",
  transition: "all 0.3s ease-in-out",
  boxShadow: "rgba(193, 244, 246, 0.698) 0px 0px 0px 0px",
  animation: "pulse 1.2s cubic-bezier(0.8, 0, 0, 1) infinite",
  alignItems: "center",
  border: "0",
  cursor: "pointer",
  transform: "scale(1)", // Initial scale
};

const pulseButtonHoverStyle = {
  transform: "scale(1.2)",
};

const styles = `
@keyframes pulse {
  100% {
    box-shadow: 0 0 0 45px rgba(193, 244, 246, 0);
  }
}
.pulse-button:hover, .pulse-button:focus {
  transform: scale(1.2);
}
`;

const AddStyles = () => <style>{styles}</style>;

const VideoPlay_button = () => {
  return (
    <div>
      <AddStyles />
      <PulseButton />
    </div>
  );
};

export default VideoPlay_button;

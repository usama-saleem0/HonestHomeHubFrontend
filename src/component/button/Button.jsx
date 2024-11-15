import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";

function Btn(props) {
  const {
    label,
    onClick,
    style,
    disabled,
    type,
  } = props;
  return (
    <>
      <button
        onClick={onClick}
        style={style}
        disabled={disabled}
     
        type={type}
      >
        {label}
      </button>
    </>
  );
}
export default Btn;

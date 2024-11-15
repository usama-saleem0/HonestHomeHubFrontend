import { Stack } from "@mui/material";
import "./input.css";
import { lable_color } from "../../utils/color";
import { IoIosSend } from "react-icons/io";

function CustomInput(props) {
  const {
    value,
    defaultValue,
    placeholder,
    type,
    id,
    onChange,
    color,
    required,
    disabled,
    className,
    width,
    label,
    style,
    name,
    key,
    spacingg,
    Icon,
  } = props;
  return (
    <Stack spacing={spacingg ? spacingg : 1}>
      
      <div className="inputForAddCart">
        {/* <div style={{ marginTop: 1.5 }}>{Icon}</div> */}
        <div>
          <input
            key={key}
            name={name}
            type={type}
            width={width}
            id={id}
            placeholder={'Enter Your Email'}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className="inputinner"
          />
        </div>
        <Stack >
          <IoIosSend className="footer-btn_button" size={30} color="white"  />
        </Stack>
      </div>
    </Stack>
  );
}
export default CustomInput;

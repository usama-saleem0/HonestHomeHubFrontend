import { Stack } from "@mui/material";
import "./input.css";
import { lable_color } from "../../utils/color";
function Input(props) {
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
  } = props;
  return (
    <Stack spacing={spacingg ? spacingg : 0.3}>
      <label
        htmlFor={id}
        style={{
          color: lable_color,
          display: "block",
          fontSize: "16px",
          width: "100%",
          fontWeight: 400,
        }}
      >
        {label}
      </label>
      <input
        key={key}
        name={name}
        type={type}
        width={width}
        id={id}
        placeholder={placeholder}
        className="inputStyle"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        disabled={disabled}
        style={{ padding: "7px", borderRadius: "7px",backgroundColor:'transparent', ...style }}
      />
    </Stack>
  );
}
export default Input;

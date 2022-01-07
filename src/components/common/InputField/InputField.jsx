import Input from "@mui/material/Input";

const InputField = ({
  sx,
  title,
  onClick,
  onChange,
  multiline,
  maxRows,
  name,
  value,
}) => {
  return (
    <Input
      name={name}
      value={value}
      multiline={multiline}
      maxRows={maxRows}
      sx={sx}
      placeholder={title}
      onChange={onChange}
      onClick={onClick}
      fullWidth
      disableUnderline
    />
  );
};

export default InputField;

import Input from "@mui/material/Input";

const InputField = ({
  sx,
  title,
  onClick,
  onChange,
  multiline,
  maxRows,
  name,
  defaultValue,
  value,
}) => {
  return (
    <Input
      name={name}
      defaultValue={defaultValue}
      multiline={multiline}
      maxRows={maxRows}
      sx={sx}
      placeholder={title}
      onChange={onChange}
      onClick={onClick}
      fullWidth
      disableUnderline
      value={value}
    />
  );
};

export default InputField;

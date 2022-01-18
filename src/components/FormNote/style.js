export const formStyle = {
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    my: 10,
    // border: "1px solid black",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "4px",
    "&:hover": { boxShadow: "0px 0px 5px #9e9e9e", transition: "0.6s" },
  },
  input: {
    p: 2,
    color: "#5f6368",
    letterSpacing: ".04272727em",
    fontFamily: "Roboto,Arial,sans-serif",
    lineHeight: "1rem",
    // width: "600px",
  },
  inputContentStyle: {
    fontWeight: "400",
  },
  inputTitleStyle: {
    fontWeight: "600",
  },

  iconButtonStyle: {
    display: "flex",
    justifyContent: "end",
  },
};

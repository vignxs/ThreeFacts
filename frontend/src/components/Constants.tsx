
export const typographyStyle = {
  fontSize: "2rem", // You can adjust the font size as needed
  color: "initial",
};

export const textFieldStyles = {
  "& .MuiTextField-root": {
    mb: 3,
    backgroundColor: "#fffffe",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    background: "white",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    borderColor: "rgb(33, 43, 54)",
    "&:hover fieldset": {
      borderColor: "rgb(33, 43, 54)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(33, 43, 54)",
    },
    "& .MuiInputLabel-root": {
      color: "rgb(33, 43, 54)",
    },
  },
  //   '& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button':
  //     {
  //       appearance: "none",
  //       margin: 0,
  //     },
};




export const sxStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "480px",
  padding: "240px 44px", // Adding the specified padding
};

import { createTheme } from "@mui/material/styles";

export const typographyStyle = {
  fontFamily: "Outfit", // Replace 'outfit' with the actual font name
  fontSize: "2rem", // You can adjust the font size as needed
  color: "initial",
};

export const textFieldStyles = {
  "& .MuiTextField-root": {
    mb: 3,
    fontFamily: "Outfit",
    backgroundColor: "#fffffe",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    background: "white",
    fontFamily: "Outfit",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    fontFamily: "Outfit",
    borderColor: "rgb(33, 43, 54)",
    "&:hover fieldset": {
      borderColor: "rgb(33, 43, 54)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(33, 43, 54)",
      fontFamily: "Outfit",
    },
    "& .MuiInputLabel-root": {
      color: "rgb(33, 43, 54)",
      fontFamily: "Outfit",
    },
  },
  //   '& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button':
  //     {
  //       appearance: "none",
  //       margin: 0,
  //     },
};


export const theme = createTheme({
  palette: {
    info: {
      main: "#000000",
    //   main: `rgb(92, 156, 214)`,
    },
  },
});


export const sxStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "480px",
  padding: "240px 44px", // Adding the specified padding
};

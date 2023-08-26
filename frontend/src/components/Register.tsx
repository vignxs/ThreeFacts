import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { sxStyles, textFieldStyles, typographyStyle } from "./Constants";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./AxiosHelper";

const Register = () => {
  const history = useNavigate();

  // const initialFormData = Object.freeze({
  //   email : '',
  //   username: '',
  //   password: ''
  // })

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setComfirmPassword] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "confirmPassword") {
      setComfirmPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/users/register/", {
        email: email,
        username: name,
        password: password,
      });

      if (response.status === 201) {
        history("/signin"); 
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value: string) => {
      return value === password;
    });

    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);

  return (
    <div
      className="MuiStack-root"
      style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}
    >
      <Stack
        direction="column"
        width={"70%"}
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          background: `linear-gradient(rgba(249, 250, 251, 0.88), rgba(249, 250, 251, 0.88)) center center / cover no-repeat, url(/assets/background/overlay_2.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Stack direction="column" alignItems="center" spacing={2}>
          <Box width={60} height={60}>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          <Typography sx={typographyStyle} variant="h3" color="initial">
            Start Unveiling the Triple Truths Today!.
          </Typography>
        </Stack>

        <Box maxWidth={720} width={500} height={800}>
          <img
            src="/img3.jpg"
            alt="welcome"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Stack>

      <Stack direction="column" sx={sxStyles} width={"30%"} spacing={2}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem",
            fontFamily: "Outfit",
            fontWeight: "500",
            lineHeight: "1.5",
          }}
          color="initial"
        >
          Sign up to ThreeFacts
        </Typography>

        <Stack
          direction="row"
          sx={{
            marginBottom: "40px !important",
            marginLeft: "0 !important",
          }}
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="body2"
            sx={{
              // fontSize: "1.5rem",
              fontFamily: "Outfit",
              margin: "0",
              // fontWeight: "500",
              // lineHeight: "1.5",
            }}
            color="initial"
          >
            Already have an Account?
          </Typography>
          <Typography
            component="a"
            href="/signin"
            variant="subtitle2"
            sx={{
              // fontSize: "1.5rem",
              fontFamily: "Outfit",
              fontWeight: "500",
              marginLeft: "4px !important",
              color: `rgb(92, 156, 214)`,
              // lineHeight: "1.5",
            }}
            color="primary"
          >
            Sign in
          </Typography>
        </Stack>

        <Stack
          direction={"column"}
          sx={{
            gap: "20px",
          }}
        >
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              sx={{ ...textFieldStyles, mb: 2 }}
              label="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              InputLabelProps={{
                style: { color: "#000000", fontFamily: "Outfit" },
              }}
              fullWidth
              required
            />
            <TextValidator
              sx={{ ...textFieldStyles, mb: 2 }}
              label="Email"
              validators={["isEmail"]}
              errorMessages={["Invalid email format"]}
              name="email"
              value={email}
              onChange={handleInputChange}
              InputLabelProps={{
                style: { color: "#000000", fontFamily: "Outfit" },
              }}
              fullWidth
              required
            />

            <TextValidator
              sx={{ ...textFieldStyles, mb: 2 }}
              label="Password"
              name="password"
              type="password"
              value={password}
              InputLabelProps={{
                style: { color: "#000000", fontFamily: "Outfit" },
              }}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextValidator
              sx={{ ...textFieldStyles, mb: 2 }}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              validators={["isPasswordMatch", "required"]}
              errorMessages={["Password mismatch", "This field is required"]}
              InputLabelProps={{
                style: { color: "#000000", fontFamily: "Outfit" },
              }}
              onChange={handleInputChange}
              fullWidth
              required
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                bgcolor: "rgb(92, 156, 214)",
                "&:hover": {
                  bgcolor: "rgb(92, 156, 214)", // Change the color on hover
                },
              }}
            >
              Create Account
            </Button>
          </ValidatorForm>
        </Stack>
      </Stack>
    </div>
  );
};

export default Register;

import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { sxStyles, textFieldStyles, typographyStyle } from "./Constants";
import { axiosInstance } from "./AxiosHelper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useNavigate()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/token/", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');
        history("/");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

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
            Where Learning Multiplies by Three!
          </Typography>
        </Stack>

        <Box maxWidth={720} width={500} height={800}>
          <img
            src="/img2.jpg"
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
          Sign in to ThreeFacts
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
            New user?
          </Typography>
          <Typography
            component="a"
            href="/register"
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
            Create an Account
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
              label="Email"
              name="email"
              validators={["isEmail"]}
              errorMessages={["Invalid email format"]}
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end", // Move to the right corner
                alignItems: "center",
                marginBottom: 3,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Outfit",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                color="initial"
              >
                Forgot password
              </Typography>
            </div>
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
              Sign in
            </Button>
          </ValidatorForm>
        </Stack>
      </Stack>
    </div>
  );
};

export default Login;

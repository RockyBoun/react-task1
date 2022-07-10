import * as React from "react";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  Paper,
} from "@mui/material";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Copyright from "../copyright";
import { postApi } from "./../../../axios";
import { toast } from "react-toastify";
import "./../../../libs/toast.scss";

const SignupPage = () => {
  const [signInfo, setSignInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setSignInfo({ ...signInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    postApi("/auth/signup", signInfo)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <Container
      component={Paper}
      maxWidth="xs"
      sx={{ backgroundColor: "#f5f7fa" }}
    >
      <Box
        sx={{
          marginTop: 6,
          paddingTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign up
        </Typography>
        <ValidatorForm
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                validators={["required"]}
                errorMessages={["This field is required!"]}
                autoComplete="given-name"
                name="firstName"
                value={signInfo.firstName}
                onChange={onChange}
                fullWidth
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                validators={["required"]}
                errorMessages={["This field is required!"]}
                fullWidth
                label="Last Name"
                name="lastName"
                value={signInfo.lastName}
                onChange={onChange}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                validators={["required"]}
                errorMessages={["This field is required!"]}
                fullWidth
                label="Email Address"
                name="email"
                value={signInfo.email}
                onChange={onChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                validators={["required"]}
                errorMessages={["asdThis field is required!"]}
                fullWidth
                name="password"
                value={signInfo.password}
                onChange={onChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                placeholder="Input the password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EnhancedEncryptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </ValidatorForm>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Copyright sx={{ mt: 3, paddingBottom: 3 }} />
    </Container>
  );
};

export default SignupPage;

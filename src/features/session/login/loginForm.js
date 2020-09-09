import React, { useState } from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  IconButton,
  DialogActions
} from "@material-ui/core";
import {Visibility,VisibilityOff} from '@material-ui/icons'
import {FormLogin} from './loginStyled'

function FullField(props) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <FormControl>
      <TextField id="standard-basic" {...field} {...props} helperText={error}/>
    </FormControl>
  );
}

export default function LoginForm() {
  const hundlerSubmit = async (values) => {
    console.log(values);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validationSchema={Yup.object({
        userName: Yup.string().required("User name is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={hundlerSubmit}
    >
      <FormLogin >
        <FullField label="User" name="userName" type="text" />
        <FormControl >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <DialogActions>
          <Button color="primary">
          Go to sign up
          </Button>
          <Button type="submit" color="primary">
          Sign in
          </Button>
        </DialogActions>       
      </FormLogin>
    </Formik>
  );
}

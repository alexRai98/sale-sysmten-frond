import React from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { DialogActions, Button,CircularProgress } from "@material-ui/core";
  import {CustomTextField} from './loginStyled'
 
function FullField(props) {
 
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;
  return (
    <div>
      {error ? (
        <CustomTextField style={{marginTop:"15px"}} error {...field} {...props} helperText={meta.error} fullWidth/>
      ) : (
        <CustomTextField color="teal" style={{marginTop:"15px"}} {...field} {...props} fullWidth/>
      )}
    </div>
  );
}

function LoginForm() {
  const hundlerSubmit = (values) => {
    console.log(values);
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
      <Form>
        <FullField label="User Name" name="userName" type="text" />

        <FullField label="Password" name="password" type="password" />
        <DialogActions style={{marginTop:"20px"}}>
          <Button style={{fontWeight:"bold",textTransform:"none"}} >Go to Signup</Button>
          <Button variant="contained" type="submit" color="primary" style={{backgroundColor:"#26a69a",fontWeight:"bold", textTransform:"none"}} >
            Sign in
            <CircularProgress style={{animationDuration:"700ms",color:"#ffffff"}} size={20} />
          </Button>
        </DialogActions>
      </Form>
    </Formik>
  );
}
export default LoginForm;

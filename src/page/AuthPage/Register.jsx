import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { registerUser } from "../../api/auth";


function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="s:w-10/12 md:w-6/12  mx-auto">

      <header className="text-center">
        <h1 className="text-2xl font-bold my-10">You can sign up now!</h1>
      </header>

      <Formik
        initialValues={{
          name: "",
          apellidos: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            const response = await registerUser(values);
            if (response) {
              navigate("/");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}  className="flex flex-col xl:w-12/12 xl:mx-auto gap-y-8 px-20 py-24 mb-20 border-2 border-black">
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              required
            />

            <TextField
              label="Nombre"
              name="name"
              onChange={handleChange}
              required
            />

            <TextField
              label="Apellidos"
              name="apellidos"
              onChange={handleChange}
              required
            />

            <FormControl variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                name="password"
                onChange={handleChange}
                label="Contraseña"
                required
              />
            </FormControl>


            <button className="bg-black px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70" type="submit" >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;

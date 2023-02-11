import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { checkUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/user";

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="xs:w-10/12 md:w-6/12  mx-auto">

<header className="text-center">
        <h1 className="text-2xl font-bold my-10">You can login  up now!</h1>
      </header>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={ async (values) => {
          try {
           
            const logged = await checkUser(values)
            if(logged){
             
              dispatch(
                setLogin({
                  user: logged.user
                })
              );
              navigate("/");
            }
           
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col xl:w-12/12 xl:mx-auto gap-y-8 px-20 py-24 mb-20 border-2 border-black">
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              value={values.name}
            />

          <FormControl variant="outlined">
            <InputLabel>
              Password
            </InputLabel>
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
              value={values.password}
              label="Password"
            />
          </FormControl>

            <button className="bg-black px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70" type="submit" >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;

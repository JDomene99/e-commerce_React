import React from 'react'
import { Form, Formik } from "formik";
import TextField from "@mui/material/TextField";

import { registerUser } from "../../api/auth";
import Textarea from '@mui/joy/Textarea';

function Contact() {
  return (
    <div className="s:w-10/12 md:w-6/12  mx-auto">

      <header className="text-center">
        <h1 className="text-2xl font-bold my-10">You can Contact us now!</h1>
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

            <Textarea
              name="info"
              placeholder='Write ur message!'
              onChange={handleChange}
              required
            />



            <button className="bg-black px-10 py-2 border-4 border-white text-white rounded-lg hover:opacity-70" type="submit" >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact
import { loginValidation } from "@/lib/validation/authValidation";
import { Field, Form, Formik } from "formik";
import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  const initialValues = {
    password: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={loginValidation}
    >
      <Form>
        <label>
          <p>Name</p>
          <Field name="name" required />
        </label>
        <label>
          <p>Email</p>
          <Field name="email" required />
        </label>
        <label>
          <p>Password</p>
          <Field name="password" required />
        </label>
      </Form>
    </Formik>
  );
};

export default LoginForm;

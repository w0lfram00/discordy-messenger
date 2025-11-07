"use client";

import { loginValidation } from "@/lib/validation/authValidation";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { loginUser } from "@/lib/api/paths/auth";
import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  const initialValues = {
    password: "",
    email: "",
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: loginUser,
  });

  const labelStyle = "flex flex-col gap-1.5";
  const fieldStyle =
    "bg-gray-800 p-2 rounded-xl w-75 border border-blue-700 outline-transparent";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={loginValidation}
    >
      <Form className="text-xl flex flex-col items-center gap-4 outline-transparent">
        <label className={labelStyle}>
          <p>Name</p>
          <Field name="name" required className={fieldStyle} />
        </label>
        <label className={labelStyle}>
          <p>Email</p>
          <Field name="email" required className={fieldStyle} />
        </label>
        <label className={labelStyle + " mb-2"}>
          <p>Password</p>
          <Field name="password" required className={fieldStyle} />
        </label>
        <button
          className="bg-blue-900 p-4 rounded-2xl w-[200px] block hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

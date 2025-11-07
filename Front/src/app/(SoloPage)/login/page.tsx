import LoginForm from "@/app/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-neutral-900 h-fit p-5 rounded-3xl absolute top-1/2 left-1/2 -translate-1/2 w-fit flex flex-col gap-8 justify-center items-center">
      <h3 className="text-3xl">Please, compleat this form</h3>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

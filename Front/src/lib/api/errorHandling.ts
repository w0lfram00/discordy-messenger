import axios from "axios";

const errorHandling = (e: unknown) => {
  if (axios.isAxiosError(e))
    console.log({
      status: e.status,
      message: e.response?.data.message,
    });
  console.log({
    status: 500,
    message: "Unexpected Error",
  });
  return null;
};

export default errorHandling;

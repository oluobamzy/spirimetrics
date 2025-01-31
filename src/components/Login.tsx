import { useState } from "react";
import {Navigation} from "./Navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.tsx";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

 const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(data);
    try{
      
      await login(data.email, data.password);
     
      // Wait for 5 seconds before redirecting
      setTimeout(() => {
        toast.info("Redirecting to home page... 🚀");
        navigate("/");
      }, 5000);
    }
    catch (err) {
      console.error(err);
      setError("A network error occurred. Please try again later.");
      if (err instanceof Error) {
        toast.error(err.message || "Login failed! 😢");
      } else {
        toast.error("Login failed! 😢");
      }
    }
    
  };
  return (
    <div className="bg-white">
      <Navigation />
    <div className="flex flex-col items-center justify-center space-y-6 m-auto max-w-md p-6 mt-16 backhround-white border border-gray-200 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold leading-9 text-gray-900">
        Welcome back! Please login to your account.
      </h1>
      <form className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-1 border border-gray-200 rounded-md">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={data.email} onChange={handleChange}/>
        </div>
        <div className="flex flex-col space-y-1 border border-gray-200 rounded-md">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={data.password} onChange={handleChange}/>
        </div>
        <button  type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md" onClick={handleSubmit}>
          Log in
        </button>
      </form >
    </div >
    </div>
  );
};
export default Login;
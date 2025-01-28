import { useState } from "react";
import {Navigation} from "./Navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

 const [error, setError] = useState("");
 const [success, setSuccess] = useState("");
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(data);
    try{
      const result = await fetch("http://localhost:3000/auth/signup",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await result.json();
      console.log("returned response=============>",response);

      if(result.ok){
        setSuccess(response.message || "Signup successful!");
        toast.success(response.message || "Signup successful! 🎉");

      setData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      })
     
      // Wait for 5 seconds before redirecting
      setTimeout(() => {
        toast.info("Redirecting to home page... 🚀");
        navigate("/");
      }, 5000);
    }
    else{
      setError(response.error || response.message || "Something went wrong!");
      toast.error(response.error || response.message || "Signup failed! 😢");
    }

    }
    catch (err) {
      console.error(err);
      setError("A network error occurred. Please try again later.");
      toast.error("A network error occurred. Please try again later.");
    }
    
  };
  return (
    <div className="bg-white">
      <Navigation />
    <div className="flex flex-col items-center justify-center space-y-6 m-auto max-w-md p-6 mt-16 backhround-white border border-gray-200 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold leading-9 text-gray-900">
        Sign up for our service
      </h1>
      <form className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-1 border border-gray-200 rounded-md">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" value={data.first_name} onChange={handleChange}/>
        </div>
        <div className="flex flex-col space-y-1 border border-gray-200 rounded-md">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" value={data.last_name} onChange={handleChange} />
        </div>
        <div className="flex flex-col space-y-1 border border-gray-200 rounded-md">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={data.email} onChange={handleChange}/>
        </div>
        <div className="flex flex-col space-y-1 border border-gray-200 rounded-md">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={data.password} onChange={handleChange}/>
        </div>
        <button  type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md" onClick={handleSubmit}>
          Sign up
        </button>
      </form >
    </div >
    </div>
  );
};
export default SignUp;
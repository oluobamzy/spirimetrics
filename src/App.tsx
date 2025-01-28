import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
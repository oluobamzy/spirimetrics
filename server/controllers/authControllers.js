import cookieParser from 'cookie-parser';
import User from '../models/User.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { email: '', password: '', first_name: '', last_name: '' };
  // //incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // //incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  //validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

//  const signUpGet = (req, res) => {
//   res.send('Sign up page');
// };
//  const loginGet = (req, res) => {
//   res.send('Login page');
//  };
const signUpPost = async (req, res) => {

  const { first_name, last_name, email, password } = req.body;
  

  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });
    // console.log("user===========>", user);
    res.status(201).json(user);
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }

  // console.log(Email: ${email}, Password: ${password});
  // res.send('is this route hit');

};
const loginPost = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  // console.log(Email: ${email}, Password: ${password});
  //compare the password submitted with the password in the database and email in the database
  // const cookieOptions = {
  //   httpOnly: true,
  //   maxAge: 24 * 60 * 60 * 1000, // 1 day
  //   secure: process.env.NODE_ENV === 'production', // Secure cookies in production
  // };
  
  try {
    const user = await User.login(email,password);
    // Generate a JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d', // Token expiration
    });
     console.log("token after generation==========>",token)
    // Set the token in an HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true, // Prevents access from JavaScript
      // secure: process.env.NODE_ENV === 'production', // Only HTTPS in production
      secure: false,
      sameSite: 'Strict', // Prevent CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    console.log("user===========>", {user: { id: user._id, email: user.email }});

    res.status(200).json({ user: { id: user._id, email: user.email } });//send the user data back to the client

  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }

};

const logoutPost = async(req, res) => {
  res.cookie('jwt', '', { maxAge: 1 }); // Clear the cookie
  res.json({ message: 'Logged out successfully' });
};


export default {
  // signUpGet,
  //  loginGet,
  logoutPost,
  signUpPost,
  loginPost
};



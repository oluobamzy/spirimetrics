import User from '../models/User.js';



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
  try {
    const user = await User.login(email,password);
    res.status(200).json({ user: user});

  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json(errors);
  }

};

// const profileGet =   (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
//   };


export default {
  // signUpGet,
  //  loginGet,
  // profileGet,
  signUpPost,
  loginPost
};



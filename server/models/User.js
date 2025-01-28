import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pkg from 'validator';
import bcrypt from 'bcrypt';
dotenv.config();

const { isEmail } = pkg;
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please provide your first name'],
    lowercase: true,
  },
  last_name: {
    type: String,
    required: [true, 'Please provide your last name'],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
});

userSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function(email, password){
  const user = await this.findOne({ email });
  if(user){
    const authenticate = await bcrypt.compare(password, user.password);
    if(authenticate){
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

export default User;
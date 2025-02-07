import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  // cpassword:{
  //   type: String,
  //   required: true,
  //    },
  address: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema)
export default User;
import mongoose from "mongoose";

const AdressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  mobile: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("addresses", AdressSchema);

export default Address;
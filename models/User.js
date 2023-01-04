import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Please Enter your full name",
    },
    email: {
      type: String,
      required: "Please Enter your email address",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Please enter a password",
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "",
    },
    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        state: {
          type: String,
        },
        country: {
          type: String,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

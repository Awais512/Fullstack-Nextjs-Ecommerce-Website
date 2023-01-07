import jwt from "jsonwebtoken";
import { ACTIVATION_TOKEN_SECRET, RESET_TOKEN_SECRET } from "../constants";

export const createActivationToken = (payload) => {
  return jwt.sign(payload, ACTIVATION_TOKEN_SECRET, { expiresIn: "2d" });
};

export const createResetToken = (payload) => {
  return jwt.sign(payload, RESET_TOKEN_SECRET, { expiresIn: "6h" });
};

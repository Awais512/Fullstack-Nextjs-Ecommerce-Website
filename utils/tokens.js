import jwt from "jsonwebtoken";
import { ACTIVATION_TOKEN_SECRET } from "../constants";

export const createActivationToken = (payload) => {
  return jwt.sign(payload, ACTIVATION_TOKEN_SECRET, { expiresIn: "2d" });
};

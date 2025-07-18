import jwt from "jsonwebtoken";

const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "your_jwt_secret", {
    expiresIn: "12h",
  });
};

export default generateToken;

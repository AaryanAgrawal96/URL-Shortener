import jwt from "jsonwebtoken";

const secret = "Neutr1n0K1ng69";

function setUser(user) {
  const payload = { 
    _id: user._id,
    email: user.email,
    username: user.username,
    role: user.role,
   };
  return jwt.sign(payload, secret);
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

export { setUser, getUser };

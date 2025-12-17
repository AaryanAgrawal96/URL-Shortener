import { v4 as uuidv4 } from "uuid";
import { User } from "../models/user.js";
import { setUser } from "../services/auth.js";

async function handleSignUp(req, res) {
  const { username, email, password } = req.body;
  await User.create({
    username,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid email or password",
    });
  const token = setUser(user);
  res.cookie("token", token);
  return res.redirect("/");
}

export { handleSignUp, handleLogin };

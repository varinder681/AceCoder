import User from "../models/userModel.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    res.json({ error: "User already exists" });
    return;
  }

  try {
    const newUser = await User.create({
      name,
      email,
      password,
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json({ error: "Invalid user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.status(200);
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(400);
        res.json({ error: "Wrong password" });
      }
    } else {
      res.status(404);
      res.json({ error: "User does not exits" });
    }
  } catch (error) {
    res.status(500);
    res.json({ error: "Server timed out" });
  }
};

export { register, login };

import { User } from "../models/user.model.js";

export const createUser = async (data) => {
  try {
    const { username } = data;
    const user = await User.findOne({ username: username });
    if (!user) {
      const newUser = await User.create({ username: username });
      await newUser.save();
      if (newUser) {
        localStorage.setItem("myUser", newUser.id);
        return false;
      } else {
        return "user naither already exists not new created";
      }
    } else {
      localStorage.setItem("myUser", user.id);
      return true;
    }
  } catch {
    return "error";
  }
};

export const updateUser = async (data) => {
  try {
    const { username, message } = data;
    const obj = { username: username, message: message };
    const user = await User.findOne({username:username});
    if (user) {
      user.chats.push(obj);
      await user.save();
      return true
    } else {
      return "error";
    }
  } catch {
    return "error";
  }
};

import { User } from "../models/user.model.js";

export const createUser = async (data) => {
  try {
    const { username } = data;
    const user = await User.findOne({ username: username });
    if (!user) {
      const newUser = await User.create({ username: username });
      await newUser.save();
      if (newUser) {
        return false;
      } else {
        return "user naither already exists not new created";
      }
    } else {
      return true;
    }
  } catch {
    return "error";
  }
};

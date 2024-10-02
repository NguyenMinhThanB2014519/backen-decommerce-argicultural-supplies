const makeUsersServices = require("../services/users.services");

async function readUser(req, res) {
  let users = [];
  try {
    const usersService = makeUsersServices();
    users = await usersService.readUser();
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    console.error("Error reading users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json(users);
}

function createLogin(req, res) {
  res.send("Login123");
}
function changePassword(req, res) {
  res.send("Change Password");
}
module.exports = {
  createLogin,
  changePassword,
  readUser,
};

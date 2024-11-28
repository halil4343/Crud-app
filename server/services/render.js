const userDb = require("../model/model");

exports.homeRoutes = async (req, res) => {
  try {
      const userList = await userDb.find({});
      
      // Check if users are found
      if (userList.length === 0) {
          console.warn("No users found in the database.");
      }

      res.status(200).render("index", { users: userList });
  } catch (error) {
      console.error("Error fetching users from the database:", error.message);
      res.status(500).render("index", { 
          users: [],
          errorMessage: "Something went wrong. Please try again later."
      });
  }
};


exports.add_user = (req, res) => {
    res.render("add_user")
}

exports.update_user = (req, res) => {
    res.render("update_user")
}

const axios = require("axios");
const userDb = require("../model/model");


// exports.homeRoutes = (req, res) => {
//     // Make a get request to /api/users
//     axios.get('http://localhost:3000/api/users')
//         .then(function(response){
//             res.render('index', { users : response.data });
//         })
//         .catch(err =>{
//             res.send(err);
//         })

    
// }

exports.homeRoutes = async (req, res) => {
    try {
      const users = await userDb.find({});
      res.render("index",{users : users})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


exports.add_user = (req, res) => {
    res.render("add_user")
}

exports.update_user = (req, res) => {
    res.render("update_user")
}

const axios = require("axios")

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}


exports.add_user = (req, res) => {
    res.render("add_user")
}

exports.update_user = (req, res) => {
    const userId = req.query.id; // Get the ID from the query parameters
    axios
      .get(`http://localhost:3000/api/users`, { params: { id: userId } }) // Pass the ID to the API
      .then((response) => {
        res.render('update_user', { user: response.data }); // Render the template with the single user's data
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Failed to fetch user data');
      });
  };

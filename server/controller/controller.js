var userDb = require("../model/model")

//create and save a new user 
exports.create = (req,res) =>{
    //validate the req
   if(req.body){
        res.status(400).send({message : "Content can not be empty"})
        return;
    }
    //new user
    const user = new userDb({
        name : req.body.name,
        email: req.body.email,
        gender : req.body.gender,
        status: req.body.status
    })
    
    //save user in the database
    user
        .save(user)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating user"
            })
        })
}

//retrieve and return a/all users
exports.find =(req,res) =>{

}

//update a new idtified user by user id
exports.update = (req,res) =>{

}

//delete

exports.delete = (req,res) => {

}


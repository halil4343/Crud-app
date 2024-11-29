var userDb = require("../model/model")

//create and save a new user 
exports.create = (req,res) =>{
    //validate the req
   if(!req.body){
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
        
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating user"
            })
        })
}

//retrieve and return an/all user/s
exports.find =(req,res) =>{
    if(req.query.id){
        const id = req.query.id
        userDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message:"Not found user with id " + id})
                }else{
                    res.send(data)
                    console.log(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message : err.message || "Error occured while retriving user with id " + id})
            })
    }else{
        userDb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({message:err.message || "Error occured while retriving user info"})
            })

    }
}

//update a new idtified user by user id
exports.update = (req,res) =>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Update data can not be empty!"})
        }

        const id = req.params.id
        userDb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
            .then(data=>{
                if(!data){
                    res.status(404).send({message: `Cannot find user with id : ${id} and update!`})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message: err.message || "Error occured while updating the user data"})
            })

}

//delete

exports.delete = (req,res) => {
    const id = req.params.id

    userDb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message : `Cannot find the user with id : ${id} and delete! Maybe id is wrong.`})

            }else{
                res.send({message : "User deleted succesfully!"})
            }
        }).catch(err=>{
            res.status(500).send({message : `Error occured while deleting the user data with id : ${id} !`})
        })
}


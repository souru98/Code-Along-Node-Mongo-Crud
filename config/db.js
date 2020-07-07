const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Naveen:NaveenHoney123@prograds-veqfe.mongodb.net/ProGrad?retryWrites=true&w=majority',
{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify : false
},
(err) =>{
    if(!err){
        console.log("Node Connected with DB");
    }
    else{
        console.log("Error in Connection", JSON.stringify(err));
    }
})

module.exports = mongoose;
//import mongoose
const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({

    vname:{
        type:String,
        require:true,
    },
    vmodel:{
        type:String,
        require:true,
    },
    vnumber:{
        type:String,
        require:true,
    },
    vyear:{
        type:String,
        require:true,
     
    },
    vtype:{
        type:String,
        require:true,
     
    },
    vitems:{
        type:String,
        require:true,
     
    },
    vbrand:{
        type:String,
        require:true,
     
    },
    vdefects:{
        type:Array,
        require:true,
     
    },
    vattacthment:{
        type:Array,
        require:true,
     
    },

})

//create modal
const vechile_details = mongoose.model("vechile_details",registerSchema)

//export
module.exports = vechile_details

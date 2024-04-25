const { default: mongoose } = require('mongoose')
const mongodb=require('mongoose')

const RegistrationSchema=new mongoose.Schema({
        name:String,
        email:String,
        lawyerRegistrationnumber:Number,
        area:String,
        organization:String,
        location:String,
        experience:Number,
        language:String

})

const registrationModel=mongoose.model("userRegistration",RegistrationSchema);
module.exports=registrationModel;



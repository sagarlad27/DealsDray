const mongoose=require("mongoose");


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const mobilePattern = /^\d{10}$/; 
const employeeSchema = mongoose.Schema({
    id:{
        type:String,
        required:[true,"Please add the employee name"],
        unique:[true,"This id already registered"],
    },
    name:{
        type:String,
        required:[true,"Please add the employee name"]
    },
    email:{
        type:String,
        required:[true,"Please add the employee email address"],
        unique:[true,"This email already registered"],
        validate: {
            validator: function(v) {
                
                return emailPattern.test(v);
            },
            message: "Please enter a valid email address"
        }
    },
    mobileNo:{
        type:Number,
        required:[true,"Please add the employee mobile number"],
        validate: {
            validator: function(v) {
                
                return mobilePattern.test(v);
            },
            message: "Please enter a valid mobile number (10 digits)"
        }
    },
    designation:{
        type:String,
        required:[true,"Please add the employee designation"]
    },
    gender:{
        type:String,
        required:[true,"Please add the employee gender"]
    },
    course:{
        type:String,
        required:[true,"Please add the employee course"]
    },
    image:{
        type:String,
        required:[true,"Please add the employee Image"]
    },
},{
    timestamps:true
});

module.exports= mongoose.model("Employee",employeeSchema);
const asyncHandler=require("express-async-handler");
const Employee=require("../models/employeeModel.js");


const getEmployee=asyncHandler(async(req,res)=>{
    const employee=await Employee.find();
    res.status(200).json(employee)
})

const getEmployeeById=asyncHandler(async(req,res)=>{
   const employee= await Employee.findById(req.params.id);
    if(!employee){
        res.status(404);
        throw new Error("Employee not found");
    }
    res.status(200).json(employee)
})


const createEmployee=  async(req,res)=>{

   

     const {id, name, email, mobileNo, designation, gender, course}=req.body;
    

    const imageName=req.file.filename;

    try{
        
        const employee= await Employee.create({
            id,
            name, //name:req.body.name
            email,//email:req.body.email
            mobileNo,
            designation,
            gender,
            course,
            image:imageName
             
         })
        res.status(201).json({ message:`The details for ${employee.name} is successfully saved` })

    }catch(err){
        res.status(500).json({ status: "error", message: "An error occurred while creating the employee." });

    }

}


const updateEmployee = async(req,res)=>{
    console.log(req.params.id)
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        res.status(404);
        throw new Error("Employee not found, what to do");
    }
    
    const updatedEmployee= await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({ message:`The details for ${updatedEmployee.name} is successfully updated` })
}


const deleteEmployee=asyncHandler(async(req,res)=>{
    const employee= await Employee.findById(req.params.id);
    if(!employee){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Employee.deleteOne({_id:req.params.id});
    res.status(200).json({message:`Employee deleted with ID ${req.params.id}`});
})

module.exports={getEmployee,getEmployeeById,createEmployee,updateEmployee,deleteEmployee}

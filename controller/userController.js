const db=require('../util/database')
const Role=require('../models/Role.model')
const User=require('../models/User.model')
const Employeedetails = require('../models/empdetails.model')
const EmployeeDepartment=require('../models/employeedepartment.model')
const EmployeeSalary =require('../models/employeesalary.model')

exports.role=(req,res)=>{
    const role={
        roleId:req.body.roleId,
        role_name:req.body.role_name
    }
    Role.create(role)
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send('Error in Creating role',err)
    })
}

exports.user=(req,res)=>{
    const user={
        userId:req.body.userId,
        roleId:req.body.roleId,
        username:req.body.username
    }
    User.create(user)
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send('Error in createing User',err)
    })
}

exports.empdetails=(req,res)=>{
    const empdetails={
        userId:req.body.userId,
        employeeId:req.body.employeeId,
        country:req.body.country,
        department:req.body.department
    }
    Employeedetails.create(empdetails)
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send('Error in creating Employee details',err)
    })
}

exports.empdepart=(req,res)=>{
    const empdepart={
        employeeId:req.body.employeeId,
        departmentId:req.body.departmentId,
        start_date:req.body.start_date,
        end_date:req.body.end_date
    }
    EmployeeDepartment.create(empdepart)
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send('Error in Creating Employee Department',err)
    })
}

exports.empsalary=(req,res)=>{
    const empsalary={
        employeeId:req.body.employeeId,
        start_date:req.body.start_date,
        end_date:req.body.end_date
    }
    EmployeeSalary.create(empsalary)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send("Error in creating Employee salary",err)
    })
}
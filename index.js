
var express = require('express');

const { QueryTypes } = require('sequelize');
var bodyparser = require('body-parser');
var router = require('./routes/userRoutes');
const db = require('./util/database');
const User=require('./models/User.model')
const Role=require('./models/Role.model')


var app = express();
db.sync();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use('/',router)

const port  = process.env.PORT || 4000;
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running on =>"+port);
    }
})








































































































// const sequelize = require("./util/database");
// const EmployeeDepartment=require('./models/employeedepartment.model')
// const Employeesalary=require('./models/employeesalary.model')

// // const Customer = require("./models/customer");
// // const Order = require("./models/order");

// EmployeeDepartment.hasMany(Employeesalary);

// let employeeDepartmentEmployeeId = null;
// sequelize
//   .sync()
//   // .sync()
//   .then((result) => {
//     return EmployeeDepartment.create({employeeId:'3448', departmentId:'0976',start_Date:'2012-07-29',end_Date:'2023-09-09'})
//     console.log(result);
//   })
//   .then(employeedep => {
//     employeeDepartmentEmployeeId = employeedep.id;
//     console.log("First Customer Created: ",employeedep);
//     return employeedep.createEmployeesalary({employeeId:'3442',start_Date:'2021-07-29',end_Date:'2021-09-09'});
//   })
//   .then(details => {
//     console.log("EmployeeSalary is : ",Employeesalary);
//     return Employeesalary.findAll({ where: employeeDepartmentEmployeeId==='2'});
//   })
//   .then(orders => {
//     console.log("All the Orders are : ",orders);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // //one to many relation b/w customer table and order table(this will automaticaaly create forgin key called customer id inside the  order table)
// // Customer.hasMany(Order);

// // // to make the access of customer object in that .then(order)
// // let customerId=null;

// // sequelize.sync({force:true})
// // .then((result)=>{
// //     // to add the values
// //    return Customer.create({name:"Chandler bing ",email:'chandler@gmail.com'})
// //     console.log(result)
// // }).then(customer=>{
// //     customerId=customer.id;
// //     console.log(customer,"c")
// //     //creteOder()method provied by sequileze  on customer object  since siq knows there is realtion between c and o table  
// //    return customer.createOrder({total:'45'})
// //     // return Order.create({total:'45'})


// // }).then(order=>{
// //     console.log("first Order",order)
// //     //to find the placed order  by the customer
// //    return  Order.findAll({where :customerId})
// // }).then(orders=>{
// //     console.log(orders)
// // })
// // .catch(err=>{
// //     console.log(err)
// // })
const  Sequelize= require('sequelize')
const db=require('../util/database')

const EmployeeDepartment = db.define('employeedepartment',{
    
    employeeId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
        ,
        references:{
            model:'Employeedetails',
            key:'employeeId'
        }
    },
    departmentId:{
        type:Sequelize.INTEGER,
        allowNull:false ,
        primaryKey:true
    },
    start_date:{
        type:Sequelize.DATE,
        allowNull:false 
    },
    end_date:{
        type:Sequelize.DATE,
        allowNull:false 
    }
})
module.exports=EmployeeDepartment
const  Sequelize= require('sequelize')
const db=require('../util/database')

const EmployeeSalary = db.define('employeesalary',{
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
    start_date:{
        type:Sequelize.DATE,
        allowNull:false 
    },
    end_date:{
        type:Sequelize.DATE,
        allowNull:false 
    }
})
module.exports=EmployeeSalary
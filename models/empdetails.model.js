const  Sequelize= require('sequelize')
const db =require('../util/database')

const Employeedetails = db.define('employeeDetails',{
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
        ,
        references:{
            model:'User',
            key:'userId'
        }
    },
   employeeId:{
        type:Sequelize.INTEGER,
        allowNull:false ,
        primaryKey:true
    },
    country:{
        type:Sequelize.STRING,
        allowNull:false
    },

    department:{
        type:Sequelize.STRING,
        allowNull:false
    }

})
module.exports=Employeedetails
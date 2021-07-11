const  Sequelize= require('sequelize')
const db=require('../util/database')

const Role = db.define('role',{
   roleId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    role_name:{
        type:Sequelize.STRING,
        allowNull:false 
    }
})
module.exports=Role
const  Sequelize= require('sequelize')
const db=require('../util/database')

const User = db.define('User',{
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    roleId:{
        type:Sequelize.DATE,
        allowNull:false,
        references:{
            model:'Role',
            key:'roleId'
        }
    },
   username:{
        type:Sequelize.STRING,
        allowNull:false 
    }
})
module.exports=User
const { Sequelize }=require('sequelize')
const db = new Sequelize("traing1","root","root",{
    dialect:'mysql'
})


module.exports=db
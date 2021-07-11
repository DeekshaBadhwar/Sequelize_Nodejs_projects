const express=require('express')
var router=express.Router()

var userCtrl=require('../controller/userController')

router.post('/role',userCtrl.role)
router.post('/user',userCtrl.user)
router.post('/empdetails',userCtrl.empdetails)
router.post('/empdepart',userCtrl.empdepart)
router.post('/empsalary',userCtrl.empsalary)



module.exports=router
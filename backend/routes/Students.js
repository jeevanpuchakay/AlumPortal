const router=require('express').Router();


let Student=require('../models/student');


router.route('/').get((req,res)=>{
    Student.find()
    .then((all)=>res.json(all))
    .catch(err=>res.status(400).json('Error: '+err))
});


router.route('/add').put((req,res)=>{
    const newStudent= new Student();
    newStudent.Name=req.body.Name;
    newStudent.RollNo=Number(req.body.RollNo);
    newStudent.Question1=req.body.Question1;
    newStudent.save()
    .then(()=>res.json('Succesfully added'))
    .catch((err)=>res.status(400).json('Error'+err));
})



module.exports=router;
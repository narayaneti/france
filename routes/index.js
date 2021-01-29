var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var webcontroller=require('../controllers/index');
router.use(cookieParser());
router.use(session({secret: "Narayan, its a secret!",proxy: true,resave: true,saveUninitialized: true}));
//login
router.get('/', webcontroller.index);
router.post('/',webcontroller.login);
//forget password
router.get('/forgot-password',webcontroller.forgot_password);
router.post('/forgot-password',webcontroller.forgot_password);
//forgot-password-change
router.get('/forgot-password-change',webcontroller.forgot_password_change);
router.post('/forgot-password-change',webcontroller.forgot_password_change);

//forgot-password-otp
router.post('/forgot-password-otp',webcontroller.forgot_password_otp);

//dashborad
router.get('/dashboard',webcontroller.dashboard);

//add-new-admin
router.get('/add-new-admin',webcontroller.add_new_admin);
router.post('/add-new-admin',webcontroller.add_new_admin);

//admin list
router.get('/admin-list',webcontroller.admin_list);
router.get('/admin-list/:action/:id',webcontroller.admin_list);

//add-new-investors
router.get('/add-new-investors',webcontroller.add_new_investors);
router.post('/add-new-investors',webcontroller.add_new_investors);
//investors list
router.get('/investors-list',webcontroller.investors_list);

//edit-investors
router.get('/edit-investors-deatil',webcontroller.edit_investors);
router.get('/edit-investors-deatil/:id',webcontroller.edit_investors);
router.post('/edit-investors-deatil',webcontroller.edit_investors);
router.post('/edit-investors-deatil/:id',webcontroller.edit_investors);




/*router.get('/user',function(req,res,next){
  MongoClient.connect(MongoClienturl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("eti_investment");
    var myobj = { mobile: "9644774397",name:"Narayan Kumar Singh", password: "$2b$11$O25.ALJUqkWn/SPGdpGlVuz3taS6NBKlP6miNqLYwkHWpkSDgDq06",admin_type:1,status:1,email:'narayan@SpeechGrammarList.com' };
    dbo.collection("admin").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});*/
/*router.get('/user_reg',function(req,res,next){
  res.render('user_reg');
})

router.post('/user_reg',function(req,res,next){
  const v = new Validator(req.body, {
    name: 'required'
  });
  v.check().then((matched) => {
    if (!matched) {
      res.status(422).send(v.errors);
    }
  });
  
})*/
module.exports = router;
//$env:DEBUG='myapp:*'; npm start

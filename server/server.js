import express from 'express';
import mongoose from 'mongoose';
import { index } from './get_route_handlers/index_route.js';
import { login } from './get_route_handlers/login_route.js';
import { register } from './get_route_handlers/register_route.js';


const app = express();

//-----VIEW ENGINE CONFIGURATION-----
app.set('view engine', 'ejs');
app.set('views', 'Ejs_Files');
app.use(express.static('static'));

//-----DATABASE CONNECTION-----
mongoose.connect('mongodb://localhost:27017/Online_Addmission_System');

const userSchema = new mongoose.Schema({
    Data: Object
}, {collection: 'Students'});


const userModel = mongoose.model('Students', userSchema);

//-----PARSER CONFIGURATION-----
app.use(express.urlencoded({extended: true}));

//-----GET REQUEST HANDLERS-----
index(app);
login(app);
register(app);

//-----POST REQUEST HANDLERS-----
app.post('/home-reg', (req, res) => {
    console.log(req.body);
      userModel({
        Data: req.body
    }).save().then(() => {
        console.log('A new user has just been added!');
        res.render('login');
    })
});

//-----PORT ACTIVATION FOR REQUESTS-----
app.listen(3200, 'localhost', () =>{
    console.log('Port 3200 is now active!');
})

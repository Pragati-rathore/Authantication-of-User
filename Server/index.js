//mongodb+srv://pragatirathore511:<password>@cluster0.4dl5m7f.mongodb.net/

const express = require("express");
const mongoose = require("mongoose")
//const cors = require('cors');
const app = express();
const Port = "5000";
//const User = "./Model.js"

const DB ='mongodb+srv://pragatirathore511:pragatirathore511@cluster0.4dl5m7f.mongodb.net/signUpForm'
app.use(express.json())

mongoose.connect(DB ,
    {useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex: true
     
    }
    ).then(()=>{
      console.info("connection successfull");
    }).catch((err)=> console.log("no connection"))


    app.get('/api/check-username/:username', async (req, res) => {
        const username = req.params.name;
      
        try {
          const user = await DB.collection('user').findOne({username});
          if (user) {
            res.json({ unique: false });
          } else {
            res.json({ unique: true });
          }
        } catch (error) {
          console.error('Error checking username uniqueness:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });


    app.listen(Port,()=>console.log(`server in on at ${Port}`))
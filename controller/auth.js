const mysql = require("mysql");

var db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER ,
    password: process.env.DATABASE_PASSWORD ,
    database: process.env.DATABASE
});

var delta = null;
exports.index = (req,res) => {
    console.log(req.body);

    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    const parent = req.body.parent;
    const parentContact = req.body.parentContact;
    delta = email;
    db.query('INSERT INTO student SET ?', {name: name, contact: number ,email: email, gurdian: parent , gurdianContact: parentContact }, ( error , results) => {
       if(error){
           console.log(error);
       }
       else {
           console.log(results);
          return res.render('final', //{
              //Message: 'user registered'}
          );
       }
    });

   // res.send("form submitted");
}



var morgan = require('morgan')
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(morgan('dev'));


/* Routes */

app.get("/api", (req, res) => {

    res.json({ message: "Hello from server" });
  });

  app.post("/api/contact", async (req, res) => {
    
    try{
      let message = req.body
      console.log(message)



      
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'admin@key2design.io', // Change to your recipient
  from: 'kimaniwalker@gmail.com', // Change to your verified sender
  subject: message.description,
  text: 'and easy to do anywhere, even with Node.js',
  html: `<p>${message.message}</p>`,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

      res.json({message: message})

    } catch(err) {
      console.log(err)
      res.sendStatus(500)
    }
    

  });







  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
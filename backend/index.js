var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    console.log("hello")
    response.render('index', {header: "index"})
})




////// TWILIO TEXT ZONE



var twilio = require('twilio')
var client = new twilio.RestClient('AC898a676e25e618bf68c74649024269c1', '4eb12339d3ba65a38023d07ae2865b55');

app.post('/text', function(req, res){
    var myPhone = '+19173303815'
    var texterName = req.body.texterName
    var textMessage = req.body.textMessage + " by " + texterName
    var texterPhone = function(req) {
        if (req.body.phoneNumber) {
            return "+1" + req.body.phoneNumber
        }
        else {
            return '+16463625090'
        }
    } 
    client.sendSms({
        to: myPhone,
        from: texterPhone,
        body: textMessage
    }, function(error, message) {
        if (!error) {
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);
            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log('Message couldnt be sent');
        }
    });
})

///// NODE MAILER








  // app.get('/', function(request, response){
    //     // response.json({hello: 'world'})
    //     response.render('index', {header: "index"})
    // })

    // app.post('/users', function(req, res){
    //     var newUser = new User(req.body.user)
    //     newUser.save(function(err, user){
    //         res.json(user)
    //     })
    // })
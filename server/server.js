require('./config/config');

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// app.use son middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario')
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre != undefined) {
        res.json({
            persona: body
        });
    } else {
        res.status(400).json({
            ok: "false",
            mensaje: "El campo nombre es necesario"
        })
    }

})

app.put('/usuario/:id', function(req, res) {
    // Aqui estoy enviando el id que pongo en el browser
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})
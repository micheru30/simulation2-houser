const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err=>console.log(err))
app.use(cors());

const port = process.env.PORT;
app.listen(port,()=>console.log(`We are running on port ${port}`));

app.get('/api/houses',(req, res)=>{
    const dbInstance = req.app.get('db')
    dbInstance.get_houses()
    .then(houses=>{
        res.status(200).send(houses)
    })
    .catch(err=>{res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(err)
})
})
app.post('/api/houses',(req, res)=>{
    const {house_name,house_address,house_city,house_state,house_zip} = req.body
    const dbInstance = req.app.get('db')
    dbInstance.add_house([house_name,house_address,house_city,house_state,house_zip])
    .then(res.sendStatus(200))
    .catch(err=>{res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(err)
})
})
app.delete('/api/houses/:id',(req, res)=>{
    const {id} = req.params
    const dbInstance = req.app.get('db')
    dbInstance.delete_house([id])
    .then(res.sendStatus(200))
    .catch(err=>{res.status(500).send({errorMessage:'something went wrong'})
    console.log(err)
})
})
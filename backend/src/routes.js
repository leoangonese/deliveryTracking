// imports
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const router = express.Router();
require('dotenv').config();

// MongoDB Connection
mongoose.connect(process.env.MONGOBD);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error to get connection in MongoDB:'));
db.once('open', () => {
    console.log('connected to MongoDB!');
});

// Route's
router.get('/getDelivery/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    try {
        // mongo search
        const foundInDB = await db.collection('deliveries').findOne({ cpf });
        if (foundInDB) {
            return res.status(200).json({ data: foundInDB.data, message: 'MONGO DATA DELIVERY' });
        }

        // api
        const response = await axios.get(process.env.DELIVERY);
        const data = response.data.data;
        const foundDelivery = data.find(item => item?._destinatario?._cpf === cpf);

        if (foundDelivery) {
            await db.collection('deliveries').insertOne({ cpf, data: foundDelivery });
            return res.status(200).json({ data: foundDelivery, message: 'Data from api and put in Mongo' });
        } else {
            return res.status(404).json({ error: true, message: 'CPF dont founded' });
        }

    } catch (error) {
        return res.status(500).json({ error: true, message: 'Error to get datas' });
    }
});

router.get('/getEnterprise/:id', async (req, res) => {
    const id = req.params.id;
    try {
        // mongo search
        const foundInDB = await db.collection('enterprises').findOne({ _id: id });
        if (foundInDB) {
            return res.status(200).json({ data: foundInDB, message: 'MONGO DATA ENTERPRISE' });
        }

        // api
        const response = await axios.get(process.env.ENTERPRISE);
        const data = response.data.data;
        const foundEnterprise = data.find(item => item?._id === id);

        if (foundEnterprise) {
            await db.collection('enterprises').insertOne(foundEnterprise);
            return res.status(200).json({ data: foundEnterprise, message: 'Data from api and put in Mongo' });
        } else {
            return res.status(404).json({ error: true, message: 'Enterprise dont founded' });
        }

    } catch (error) {
        return res.status(500).json({ error: true, message: 'Error to get datas' });
    }
});

module.exports = router;

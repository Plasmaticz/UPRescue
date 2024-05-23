var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();

// Connect to the database
var db = new sqlite3.Database('mydatabase.db'); // Make sure this points to the correct database file

// Middleware to parse JSON bodies
router.use(bodyParser.json());

router.post('/', (req, res) => {
    console.log('Received data:', req.body);

    // Check the type of location user is asking for, assume 'type' is passed in the request body
    if (req.body.type === 'FoodBanks') {
        // Query to select all food banks from the database
        db.all('SELECT * FROM locations WHERE "Resource Type" = "FB"', [], (err, rows) => {
            // if (err) {
            //     res.status(500).json({ error: err.message });
            //     return;
            // }

            // Respond with the list of food banks
            res.status(200).json(rows);
        });
    } 
    else if (req.body.type === 'HomelessShelters') {
        // Query to select all shelters from the database
        db.all('SELECT * FROM locations WHERE "Resource Type" = "Sh."', [], (err, rows) => {
            // if (err) {
            //     res.status(500).json({ error: err.message });
            //     return;
            // }

            // Respond with the list of shelters
            res.status(200).json(rows);
        });
    } 
    else if (req.body.type === 'AddictionRehab') {
        // Query to select all addiction rehab from the database
        db.all('SELECT * FROM locations WHERE "Resource Type" = "Ad. Reh."', [], (err, rows) => {
            // if (err) {
            //     res.status(500).json({ error: err.message });
            //     return;
            // }

            // Respond with the list of Ad. Reh.
            res.status(200).json(rows);
        });
    } 
    else if (req.body.type === 'AlternativeShelter') {
        // Query to select all alternative shelters from the database
        db.all('SELECT * FROM locations WHERE "Resource Type" = "Alt. Sh. Com."', [], (err, rows) => {
            // if (err) {
            //     res.status(500).json({ error: err.message });
            //     return;
            // }

            // Respond with the list of alt. shelters
            res.status(200).json(rows);
        });
    } 
    else if (req.body.type === 'HealthClinics') {
        // Query to select all health clinics from the database
        db.all('SELECT * FROM locations WHERE "Resource Type" = "HC"', [], (err, rows) => {
            // if (err) {
            //     res.status(500).json({ error: err.message });
            //     return;
            // }

            // Respond with the list of health clinics
            res.status(200).json(rows);
        });
    } 
    else if (req.body.type === 'All') {
        // Query to select all health clinics from the database
        db.all('SELECT * FROM locations', [], (err, rows) => {
            // if (err) {
            //     res.status(500).json({ error: err.message });
            //     return;
            // }

            // Respond with the list of shelters
            res.status(200).json(rows);
        });
    } else {
        // Handle other cases or error out
        res.status(400).json({ error: 'Invalid type specified' });
    }
});

module.exports = router;
const express = require('express');
const path = require('path');

// Init express
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', (req, res) => {
    let coospaces = [
        {
            id: 1,
            title: 'CooSpace 1',
            author: 'John Doe',
            body: 'This is the body for coospace 1'
        },
        {
            id: 2,
            title: 'CooSpace 2',
            author: 'John Doe',
            body: 'This is the body for coospace 2'
        },
        {
            id: 3,
            title: 'CooSpace 3',
            author: 'John Doe',
            body: 'This is the body for coospace 3'
        }
    ];
    res.render('index', {
        title: 'CooSpace Clone',
        coospaces: coospaces
    });
});

// Add Route
app.get('/coospace/add', (req, res) => {
    res.render('add_coospace', {
        title: 'Add Coospace'
    });
});

// Start Server
app.listen(3005, () => {
    console.log('Server started on port 3005...');
});
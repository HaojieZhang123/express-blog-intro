// import expressJS
const express = require('express');
// assignment of function to variable app
const app = express();
// initialize port number
const port = 3000;

// array for blog
const blog = [
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: '',
        tags: [tag1]
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: '',
        tags: [tag1]
    },
    {

    },
    {

    },
    {

    }
];


// base root
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// leave server to listen to any request coming into the specified port
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});

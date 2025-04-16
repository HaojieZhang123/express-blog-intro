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
        image: 'images/ciambellone.jpeg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'images/cracker_barbabietola.jpeg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'images/pane_fritto_DOLCE.jpeg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'images/pasta_barbabietola.jpeg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'images/torta_paesana.jpeg',
        tags: ['tag1', 'tag2', 'tag3']
    }
];

// static asset folder
app.use(express.static('public'));

// base root
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// route for '/bacheca'
app.get('/bacheca', (req, res) => {
    res.json(blog);
});

// leave server to listen to any request coming into the specified port
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});

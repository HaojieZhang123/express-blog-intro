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
        image: 'public/img/1.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'public/img/2.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'public/img/3.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'public/img/4.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'titolo',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
        image: 'public/img/5.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    }
];

// static asset folder
app.use(express.static('public'));

// base root
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// route for images '/bacheca'
app.get('/bacheca', (req, res) => {
    res.json(blog);
});

// leave server to listen to any request coming into the specified port
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});

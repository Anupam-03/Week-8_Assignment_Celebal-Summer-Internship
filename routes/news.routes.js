const express = require('express');
const axios = require('axios');
const router = express.Router();



router.get('/', async (req, res) => {
    const fetchNews = async () => {
        console.log("Fetching news.....");

        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=b6a65e567c5b4b57972f888c6583463d';

        var reqUrl = new Request(url);

        try {
            const response = await axios.get(url);
            const articles = response.data.articles;
            res.render('news', { articles });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Failed to fetch news data' });
        }
    }
    fetchNews();
});


module.exports = router;

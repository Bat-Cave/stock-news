require('dotenv').config();
let googleNewsAPI = require("google-news-json");
const googleTrends = require('google-trends-api');

module.exports = {
    getGoogleNews: async (req, res) => {
        let news;

        if(req.params.search != 'no-search-here' && req.params.search != ''){
            news = await googleNewsAPI.getNews(googleNewsAPI.SEARCH, req.params.search, "en-GB");
        } else {
            news = await googleNewsAPI.getNews(googleNewsAPI.TOP_NEWS, null, "en-GB");
        }

        res.status(200).send(news);
    },
    getGoogleTrends: async (req, res) => {
        await googleTrends.realTimeTrends({ geo: 'US', category: 'b' })
        .then(function(results){
          res.status(200).send(results);
        })
        .catch(function(err){
          console.error('Oh no there was an error', err);
        });
    }
  }
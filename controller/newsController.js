const fetch = require("node-fetch");

const API_KEY = process.env.NY_TIMES_KEY;

module.exports.getNews = async (req, res) => {
  const { type } = req.params;
  const section = type;
  try {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;
    const response = await fetch(url);
    const news = await response.json();
    const reqNews = news.results.slice(10);
    res.json({ articles: reqNews, ok: true });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something went wrong", ok: false });
  }
};

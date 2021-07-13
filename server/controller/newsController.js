const fetch = require("node-fetch");

const API_KEY = process.env.NY_TIMES_KEY;

module.exports.getNews = async (req, res) => {
  const { type } = req.params;
  const sectionType = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world",
  ];
  const section = sectionType[Math.floor(Math.random() * sectionType.length)];
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

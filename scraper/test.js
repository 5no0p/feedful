let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("https://www.theverge.com/rss/full.xml");
  console.log(feed.items[0]);
})();

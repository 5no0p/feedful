const Parser = require("rss-parser");
const parser = new Parser();
const ogs = require("open-graph-scraper");
const fs = require("fs").promises;
const slugify = require("slugify");
const publicationGroups = require("../constants/publications.json");
const path = require("path");
const fse = require("fs-extra");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function getRssFeed(url) {
  let rawFeed = await parser.parseURL(url);
  return rawFeed.items.slice(0, 10).map((item) => {
    return {
      title: item.title,
      url: item.link,
      date: item.pubDate,
      author: item.author,
      content: item.content
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/style=\"[^\"]*\"/g, ""),
    };
  });
}

async function getMetaData(url) {
  let metadata = await ogs({ url });
  return {
    image: metadata.result?.ogImage?.url ? metadata.result.ogImage.url : null,
    description: metadata?.result?.ogDescription
      ? metadata.result.ogDescription
      : null,
  };
}

async function deleteExistingArticles() {
  try {
    await fse.emptyDir("./content/");
    console.log("Successfully deleted existing articles");
  } catch (err) {
    console.error(err);
  }
}

async function saveFile(data, filename, filepath) {
  try {
    fs.mkdir(`./content/${filepath}/`, { recursive: true }, (err) => {
      if (err) throw err;
    });
    await fs.writeFile(
      `./content/${filepath}/` + filename,
      JSON.stringify(data, null, 2)
    );
    console.log(`Saved ${filename}`);
  } catch (error) {
    console.log(error);
  }
}

function getFilename(title) {
  return `${slugify(title, {
    lower: true,
    strict: true,
  })}.json`;
}

(async () => {
  try {
    await deleteExistingArticles();
    asyncForEach(publicationGroups, async (group) => {
      try {
        asyncForEach(group.publications, async (publisher) => {
          try {
            console.log(`Started Scraping  $${publisher.name}  ... ⚙️`);
            let articles = await getRssFeed(publisher.rss);
            console.log("Scraping OG data... ⚙️");
            asyncForEach(articles, async (article) => {
              try {
                let metaData = await getMetaData(article.url);
                article.image = metaData.image;
                article.description = metaData.description;
                article.publisher = publisher.name;
                article.publisherUrl = publisher.url;
                console.log(
                  `Scraped ${publisher.key} article ${article.title}`
                );
                await saveFile(
                  article,
                  getFilename(article.title),
                  publisher.key
                );
              } catch (error) {
                console.log(error);
              }
            });
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
